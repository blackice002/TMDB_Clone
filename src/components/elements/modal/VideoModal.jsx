import React from 'react';
import Modal from 'react-modal';
import './videoModal.scss'


const customStyles = {
    content : {
      top                   : '35%',
      left                  : '70%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      padding:"0",
      overflow:"none"
    }
  };

Modal.setAppElement('#root')

const VideoModal = (props) => {

    const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal(){
    setIsOpen(false);
  }
    return (
        <div>
        <button onClick={openModal} style={{marginLeft:"2rem", border:"none"}}> <span style={{color:"red"}}>&#9654;</span>Play Trailer</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <button onClick={closeModal} className={"modalButton"}>X</button>
          {props.children}
        </Modal>
      </div>
    )
}

export default VideoModal
