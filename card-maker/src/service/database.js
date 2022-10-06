import { getDatabase, ref, set, onValue, off } from "firebase/database";

class CardRepository {
  constructor() {
    this.db = getDatabase();
  }

  syncCards(userId, onUpdate) {
    const query = ref(this.db, `${userId}/cards`);
    onValue(query, (snapshot) => {
      const value = snapshot.val(); // database에 저장되어 있는 cards
      value && onUpdate(value)
    });
    return () => off(query);
  }

  saveCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), card);
  }

  removeCard(userId, card) {
    set(ref(this.db, `${userId}/cards/${card.id}`), null);
  }
}

export default CardRepository;