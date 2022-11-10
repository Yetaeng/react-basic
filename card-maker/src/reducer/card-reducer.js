export default function cardReducer(cards, action) {
  switch (action.type) {
    case 'createOrUpdate': {
      const { card } = action;
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    }
    case 'delete': {
      const { card } = action;
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    }
    case 'sync': {
      const { card } = action;
      return  card;
    }
    default:
      throw Error(`${action.type} is unknown action type.`);
  }
}