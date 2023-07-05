import { useEffect, useState } from "react";

import BookDetails from "../BookDetails/BookDetails";
import BookModal from "../BookModal/BookModal";
import Modal from "../Modal/Modal";
// import styles from "./BookCard.module.scss";

const BookCard = ({ book }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsClicked(!isClicked);
    setIsOpen(!isOpen);
    console.log(isClicked);
  };
  // useEffect(() => {}, [isOpen, isClicked]);

  // need to handle each el has value and then render them
  return (
    <>
      {/* <BookDetails onClick={onClick} book={book} /> */}
      {/* {isClicked && <BookModal book={book} isOpen={isOpen} />} */}
      <button onClick={onClick}>modal click</button>
      {isClicked && (
        <Modal isOpen={isOpen} onClick={onClick}>
          <BookModal book={book} />
        </Modal>
      )}
    </>
  );
};

export default BookCard;
