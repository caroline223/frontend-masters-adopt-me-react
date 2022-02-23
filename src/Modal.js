import { useEffect, useRef } from "react";
import { render } from "react-dom";
import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal")

const Modal = ({ children }) => {
    const elRef = useRef(null);

    if(!elRef.current){
        elRef.current = document.createElement("div")
    }
    // exactly have one div on re-render; do not want to create a new div all of the time 
    //hold onto the same div so that we could eventually destroy it 
    //modal only cares for what is passed into it 
    
    useEffect(() => {
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current) //when you are done, remove me from the DOM
        //cleaning up the ref from the DOM 
    }, []);

    return createPortal(<div>{children}</div>, elRef.current)
}

export default Modal;