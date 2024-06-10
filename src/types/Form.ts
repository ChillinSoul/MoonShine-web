export interface FormInputInt {
  id?: string;
  label: string;
  name: string;
  type: string;
  color?: string;
  value: string | number | undefined;
  maxWidth?: string;
  cls?: string;
  onChange?: any;
  options?: string[];
}

export interface ButtonInt {
  text: string;
  callBack?: any;
}

export interface FormInt {
  inputs: FormInputInt[];
  button: ButtonInt;
}
