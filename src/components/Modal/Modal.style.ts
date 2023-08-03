import styled from "styled-components";

export const ModalContainer = styled.dialog`
    margin: auto;
    padding: 50px 30px;
    position: relative;
    border-radius: 5px;
    min-width: 260px;
    font-size: 0.9rem;

    p {
        background-color: #4b385f;
        color: #f1f1f1;
        border: 2px solid black;
        padding: 10px;
        border-radius: 5px;
    }
`;

export const CloseModal = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: #4b385f;
    color: #f1f1f1;
`;

export const CopyModal = styled.button`
    position: absolute;
    right: 35px;
    top: 5px;
    padding: 5px;
    border-radius: 5px;
    background-color: #ff7700;
    color: #f1f1f1;
`;