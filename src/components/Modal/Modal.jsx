import { useEffect, useRef } from "react";
import styles from "../BookModal/BookModal.module.scss";

const Modal = ({ isOpen, onClick, children }) => {
  console.log(isOpen, "-- is open?");
  const backdropRef = useRef();

  return (
    <>
      <div
        ref={backdropRef}
        onClick={onClick}
        className={isOpen ? styles.backdrop : styles.backdrop_hidden}
      ></div>
      <div className={isOpen ? styles.modal : styles.modal_hidden}>
        {children}
      </div>
    </>
  );
};

export default Modal;
