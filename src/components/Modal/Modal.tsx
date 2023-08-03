import { useState, useEffect } from "react";
import { ModalContainer, CloseModal, CopyModal } from "./Modal.style";
import { ModalProps } from "../../utils/types/types";


export default function Modal({linear, setLinear} : ModalProps) {

    const [ copy, setCopy ] = useState('Copy');
    const [ toggle, setToggle ] = useState(false);

    const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLinear({...linear, showModal: false});
    }
    
    const copyCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        
        if(toggle === false) {
            setToggle(true);
            setCopy('Copied !');
            navigator.clipboard.writeText(`background-image : ${linear.code};`);
            
            setTimeout(() => {
                setCopy('Copy');
                setToggle(false);
            }, 2000);
            
        }  
        

        
    }

    useEffect(() => {
        const dialog = document.querySelector('dialog') as HTMLDialogElement;
        if(linear.showModal) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [linear.showModal])

    return (
        <ModalContainer>
            <CopyModal onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => copyCode(e)}>{copy}</CopyModal>
            <CloseModal onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => closeModal(e)}>X</CloseModal>
            <p>background-image : {linear.code};</p>
        </ModalContainer>
    )
}
