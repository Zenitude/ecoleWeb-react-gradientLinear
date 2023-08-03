import { ButtonContainer } from "./Button.style";
import { ButtonProps } from "../../utils/types/types";

export default function Button({action, text, set, linear, setLinear} : ButtonProps) {

    const actionButton = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        if(action === 'add') { 
            e.preventDefault();
            set!(prevGradient => {
                if(prevGradient.colors.length === 5) { return prevGradient; }
                else {
                    return {
                        ...prevGradient,
                        colors: [
                            ...prevGradient.colors,
                            { hexa: '#000000', position: prevGradient.colors[prevGradient.colors.length - 1].position * 1.1  }
                        ]
                    }
                } 
            })
        } else if(action === 'delete') {
            e.preventDefault();
            set!(prevGradient => {
                if(prevGradient.colors.length === 2) { return prevGradient}
                else {
                    return {
                        ...prevGradient,
                        colors: prevGradient.colors.slice(0, -1)
                    }
                }
            })
        } else if(action === 'send') {
            e.preventDefault();
            setLinear!({...linear!, showModal: true})
        }
    }

    return (
        <ButtonContainer type={action === 'send' ? 'submit' : 'button'} onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => actionButton(e)}>
            {text}
        </ButtonContainer>
    )
}
