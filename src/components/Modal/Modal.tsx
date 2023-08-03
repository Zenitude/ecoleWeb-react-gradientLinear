import { useEffect } from "react";
import { ModalContainer, CloseModal } from "./Modal.style";
import { ModalProps } from "../../utils/types/types";


export default function Modal({linear, setLinear} : ModalProps) {

    const closeModal = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setLinear({...linear, showModal: false});
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
            <CloseModal onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => closeModal(e)}>X</CloseModal>
            <p>background-image : {linear.code};</p>
        </ModalContainer>
    )
}
