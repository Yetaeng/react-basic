import React, { memo, useRef, useState } from "react";
import styles from './cardItem.module.css';

const CardItem = memo(({ FileInput, onAddCard }) => {
  // console.log('item');
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const colorRef = useRef();
  const titleRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileURL: null });

  const onFileChange = file => {
    setFile({
      fileName: file.fileName,
      fileURL: file.fileURL,
    });
  }

  const onAdd = e => {
      e.preventDefault();
      const infos = {
        id: Date.now(),
        name: nameRef.current.value || '',
        company: companyRef.current.value || '',
        color: colorRef.current.value,
        title: titleRef.current.value || '',
        email: emailRef.current.value || '',
        message: messageRef.current.value || '',
        fileName: file.fileName || '',
        fileURL: file.fileURL || '',
      }
      
      onAddCard(infos);
      formRef.current.reset();
      setFile({ fileName: null, fileURL: null });
  }

  return (
    <>
      <form className={styles.form} ref={formRef}>
        <input className={styles.input} ref={nameRef} type="text" name="name" placeholder="Name" />
        <input className={styles.input} ref={companyRef} type="text" placeholder="Company" />
        <select className={styles.select} ref={colorRef} name="color" id="color">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="colorful">Colorful</option>
        </select>
        <input className={styles.input} ref={titleRef} type="text" placeholder="Title" />
        <input className={styles.input} ref={emailRef} type="text" placeholder="Email" />
        <textarea
          className={styles.textarea}
          ref={messageRef}
          name="message"
          id="message"
          cols="15"
          rows="3"
          placeholder="Message"
        ></textarea>
        <div className={styles.fileInput}>
          <FileInput name={file.fileName} onFileChange={onFileChange} />
        </div>
        <button type="submit" className={styles.inputBtn} onClick={onAdd}>
          Add
        </button>
      </form>
    </>
  );
});

export default CardItem;
