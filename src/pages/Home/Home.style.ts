import styled, { createGlobalStyle } from "styled-components";

type HomeStyle = {
    bg: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const GlobalStyle: any = createGlobalStyle`
    *, ::before, ::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        z-index: 1;
    }

    html, body, #root { 
        width: 100%;
        height: 100%;
        background-color: #4b385f;
    }
`;

export const HomeContainer = styled.main` 
    width: 80%;
    min-width: 278px;
    padding: 10px;
    min-height: 500px;
    margin: 50px auto 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px outset #f1f1f1;
    color: #f1f1f1;


    form {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        margin-block: 10px;

        .containerField, .containerButton {
            display: flex;
            gap: 2px;
        }

    }
`;


export const LeftContainer = styled.section`
    width: 40%;
    min-width: 260px;
    height: 70%;
`;

export const RightContainer = styled.div<HomeStyle>`
    width: 40%;
    min-width: 260px;
    height: 70%;
    min-height: 300px;
    border: 2px inset #f1f1f1;
    background: ${ ({bg}) => bg };
    background-repeat: no-repeat;
`;