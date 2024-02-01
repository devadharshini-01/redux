import { Button, Modal } from "react-bootstrap";

const Model =({ show,
    body,
    button1Value,

    button1Click,

    title,
    closeButton,})=>{
    return(
        <>
           <Modal show={show} onHide={closeButton}>
        <Modal.Header closeButton className="header">
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {body}
       
        </Modal.Body>
        <Modal.Footer >
          
            <Button variant="secondary" onClick={button1Click}>
              {button1Value}
            </Button>
       
      
        </Modal.Footer>
      </Modal>
        </>
    )
}
export default Model;