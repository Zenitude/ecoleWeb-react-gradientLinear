export type ContextType = {
    gradient: GradientType,
    setGradient: React.Dispatch<React.SetStateAction<GradientType>>
}

export type ContextProps = {
    children: React.ReactNode;
}

export type FieldColorProps = {
    type: string;
    id: string;
    index?: number;
    value?: string | number;
    options? : ColorType[];
    min?: number;
    max?: number;
}

export type OptionType = {
    title: string;
    value: ColorType[];
}

export type ButtonProps = {
    action : string;
    text: string;
    gradient?: GradientType;
    set?: React.Dispatch<React.SetStateAction<GradientType>>
    linear?: Linear
    setLinear?: React.Dispatch<React.SetStateAction<Linear>>
}

export type GradientType = { 
    colors : ColorType[];
    angle: number;
}

export type ColorType = {
    hexa: string;
    position: number;
}

export type Linear = {
    code : string;
    showModal : boolean;
}

export type ModalProps = {
    linear: Linear;
    setLinear: React.Dispatch<React.SetStateAction<Linear>>;
}