import { useContext } from "react";
import { FieldContainer, Label, Field, Select, Option } from "./Field.style";
import { FieldColorProps } from "../../utils/types/types";
import { Context } from "../../utils/context/Context";

export default function FieldColor({type, id, index, value, options, min, max}: FieldColorProps) {

  const { gradient, setGradient } = useContext(Context)!;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const change = (valueInput: any, index?: number) => {
    if(id === 'color') {      
      setGradient(prevGradient => {
        const grad = { ...prevGradient };
        grad.colors[index!].hexa = valueInput.toString();
        return grad;
      });
    } else if(id === 'angle') {
      setGradient(prevGradient => ({...prevGradient, angle: valueInput}));
    } else if(id === 'position') {
      const selectValue = document.querySelector('select')!.value;
      gradient.colors[parseInt(selectValue)].position = parseInt(valueInput);
      setGradient(prevGradient => {
        const grad = { ...prevGradient };
        grad.colors[parseInt(selectValue)].position = parseInt(valueInput);
        return grad;
      });
    }
  }

  return (
    (type === 'select' && options)
    ? (<FieldContainer type={type}>
      <Label htmlFor={`${id}`}>{id}</Label>
      <Select name={`${id}`} id={`${id}`} defaultValue={options[0].hexa}>
        {
          options.map((option, index) => (
            <Option key={`${option}-${index}`} value={index}>Color {index + 1}</Option>
          ))
        }
      </Select>
    </FieldContainer>)
    : (<FieldContainer type={type}>
      {
        (type === 'range' && max! >= 0 && min! >=0)
        ? (<>
          <Label htmlFor={`${id}`}>{id}</Label>
          <Field type={type} name={`${id}`} id={`${id}`} min={min} max={max} onChange={(e: React.ChangeEvent<HTMLInputElement>) => change(e.target.value, index)} defaultValue={value}/>
        </>)
        : (<>
          <Label htmlFor={`${id}-${index}`}>{id} {index! + 1}</Label>
          <Field type={type} name={`${id}-${index}`} id={`${id}-${index}`} value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => change(e.target.value, index)}/>
        </>)
      }
    </FieldContainer>)
    
  )
}
