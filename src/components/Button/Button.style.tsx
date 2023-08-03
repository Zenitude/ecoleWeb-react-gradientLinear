import styled from "styled-components";

type ButtonStyleProps = {
    type: string;
}

export const ButtonContainer = styled.button<ButtonStyleProps>`
    align-self: flex-start;
    background-color: ${p => {
        let bg;
        switch(p.type) {
            case 'submit' : bg = '#00f'; break;
            default : bg = '#4b385f';
        }
        return bg;
    }};
    width: ${p => {
        let width;
        switch(p.type) {
            case 'submit' : width = '150px'; break;
            default : width = '30px';
        }
        return width;
    }};
    height: ${p => {
        let height;
        switch(p.type) {
            case 'submit' : height = '30px'; break;
            default : height = '30px';
        }
        return height;
    }};
    color: ${p => {
        let color;
        switch(p.type) {
            case 'submit' : color = '#f1f1f1'; break;
            default : color = '#f1f1f1';
        }
        return color;
    }};
    border-radius: 5px;
    border: 1px solid #f1f1f1;
`;