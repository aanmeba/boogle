import { useState } from "react";

import BookDetails from "../BookDetails/BookDetails";
import BookModalContent from "../BookModalContent/BookModalContent";
import { Modal, ModalDialog } from "@mui/joy";
// import { createPortal } from "react-dom";

const BookCard = ({ book }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsClicked(!isClicked);
    setIsOpen(!isOpen);
    // console.log(isClicked);
  };

  // need to handle each el has value and then render them
  return (
    <>
      <BookDetails onClick={onClick} book={book} />
      {isClicked && (
        // createPortal(<BookModalContent book={book} />, document.body)
        <Modal
          open={isOpen}
          onClose={onClick}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ModalDialog
            color="neutral"
            layout="center"
            size="md"
            variant="outlined"
          >
            <BookModalContent book={book} />
          </ModalDialog>
        </Modal>
      )}
    </>
  );
};

export default BookCard;
