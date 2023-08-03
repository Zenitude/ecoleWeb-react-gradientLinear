import styled from "styled-components";

type FieldStyleProps = {
    type: string;
}

export const FieldContainer = styled.div<FieldStyleProps>`
    width: ${ p => { 
        let width;
        switch(p.type) {
            case 'color' : width = '50px'; break;
            case 'select' : width = '200px'; break;
            default: width = '100%';
        }
        return width;
    }};
    height: ${ p => { 
        let height;
        switch(p.type) {
            case 'color' : height = '50px'; break;
            case 'select' : height = 'auto'; break;
            default: height = '100%';
        }
        return height;
    }};
    position: relative;
`;

export const Label = styled.label`
    position: absolute;
    z-index: -1;
    opacity: 0;
`;

export const Field = styled.input<FieldStyleProps>`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
`;

export const Select = styled.select`
    background-color: #4b385f;
    color: #f1f1f1;
    border: 1px solid #f1f1f1;
    border-radius: 5px;
    padding: 5px 10px;
`;

export const Option = styled.option``;