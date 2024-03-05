export interface FormInputInt{
    label : string;
    name : string;
    type : string;
    color? : string;
    value? : string;
    maxWidth? : string;
}

export interface ButtonInt{
    text : string;
    callBack? : any;
}

export interface FormInt {
    inputs : FormInputInt[];
    button : ButtonInt;
}