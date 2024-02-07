import { Button, Modal } from "react-bootstrap";

const Model = ({
  show,
  body,
  button1Value,
 button1Click,
 button2Value,
 button2Click,
 title,
 closeButton,
 disabled1,
 disabled2,
}) => {
  return (
    <>
      <Modal size="lg" show={show} onHide={closeButton}>
        <Modal.Header closeButton className="header">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
        <Modal.Footer>
     
          <Button variant="secondary" onClick={button1Click} disabled={disabled1}>
            {button1Value}
          </Button>
          <Button variant="secondary" onClick={button2Click} disabled={disabled2}>
            {button2Value}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Model;
