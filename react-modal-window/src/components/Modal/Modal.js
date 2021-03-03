import React from "react"
import "./Modal.css"


export const Modal = ({active, setActive, children}) => {
    return (
      <div className={active ? "modal activ" : "modal"} onClick={() => setActive(false)}>
          <div className={active ? "modal-cont activ" : "modal"} onClick={e => e.stopPropagation()}>
            {children}
          </div>
      </div>
    );
  }
  
