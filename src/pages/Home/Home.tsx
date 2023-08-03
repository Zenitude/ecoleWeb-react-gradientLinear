import { useState, useContext, useEffect } from "react";
import { HomeContainer, GlobalStyle, LeftContainer, RightContainer } from "./Home.style";
import { StyleSheetManager } from "styled-components";
import { Context } from "../../utils/context/Context";
import Field from "../../components/Field/Field";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";

export default function Home () {
    const { gradient, setGradient } = useContext(Context)!;
      
    const colorGradient = () => {
        const colorsTab: string[] = [];
        gradient.colors.forEach(color => {
            colorsTab.push(`${color.hexa} ${color.position}%`);
        }); 
        return `linear-gradient(${gradient.angle}deg, ${colorsTab.join(',')})`;
    }

    const [ linear, setLinear ] = useState({code: colorGradient(), showModal: false}) 
       
    useEffect(() => {
        setLinear({...linear, code: colorGradient()})
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gradient])
    
    return(
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'theme'}>
            <GlobalStyle />
            <HomeContainer>
                <LeftContainer>
                    <h1>Gradient Generator</h1>
                    <p>Bring style to your apps.</p>

                    <form >
                        <p>Colors, min 2, max 5.</p>
                        <div className="containerField">
                            {
                                gradient.colors.map((color, index) => (
                                    <Field key={index} type={'color'} id={'color'} index={index} value={color.hexa} />
                                ))
                            }
                        </div>
                        <div className="containerButton">
                            <Button action={'delete'} text={'-'} gradient={gradient} set={setGradient} />
                            <Button action={'add'} text={'+'} gradient={gradient} set={setGradient} />
                        </div>
                    </form>

                    <form>
                        <div>
                            <p>Pick and change a Color's position</p>
                            <Field type={'select'} id={'select'} options={gradient.colors} />
                        </div>

                        <div>
                            <p>Color's position</p>
                            <Field type={'range'} id={'position'} min={0} max={100}/>
                        </div>

                        <div>
                            <p>Gradient's global angle</p>
                            <Field type={'range'} id={'angle'} min={0} max={360} value={gradient.angle} />
                        </div>

                        <Button action={'send'} text={'Get the code !'} linear={linear} setLinear={setLinear} />
                    </form>

                </LeftContainer>
                <RightContainer bg={colorGradient()}></RightContainer>
                <Modal linear={linear} setLinear={setLinear} />
            </HomeContainer>
        </StyleSheetManager>
    )
}