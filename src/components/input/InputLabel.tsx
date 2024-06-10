import type { FormInputInt } from "../../types/Form";
import { useState } from "react";

const InputLabel = ({
  id,
  label,
  name,
  type,
  color,
  value,
  maxWidth,
  cls,
  onChange,
}: FormInputInt) => {
  let div_style_string = `block input-label p-5 ${cls}`;
  let label_style_string = `text-${color ?? "orange"}-400 pr-2 text-center`;
  let input_style_string = `border text-slate-700 border-${color ?? "orange"}-400  rounded ${maxWidth == "false" ? "" : "w-full"} focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`;

  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div className={div_style_string}>
      <label className={label_style_string}>{label}</label>
      <input
        {...(id ? { id } : {})}
        className={input_style_string}
        type={type}
        name={name}
        value={onChange ? value : inputValue}
        onChange={onChange ? onChange : handleChange}
      />
    </div>
  );
};

export default InputLabel;
