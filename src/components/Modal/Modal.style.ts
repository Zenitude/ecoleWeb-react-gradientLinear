import styled from "styled-components";

export const ModalContainer = styled.dialog`
    margin: auto;
    padding: 50px 30px;
    position: relative;
    border-radius: 5px;
    min-width: 260px;
    font-size: 0.9rem;
`;

export const CloseModal = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    padding: 5px;
    border-radius: 5px;
`;