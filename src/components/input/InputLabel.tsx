import type { FormInputInt } from "../../types/Form";
import { useState } from "react";

const InputLabel = ({
  label,
  name,
  type,
  color,
  value,
  maxWidth,
}: FormInputInt) => {
  let label_style_string = `text-${color ?? "orange"}-400 pr-2 text-center`;
  let input_style_string = `border-2 text-slate-700 border-${color ?? "orange"}-400  rounded ${maxWidth == "true" ? "w-full" : ""} focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50`;

  const [inputValue, setInputValue] = useState(value);

  const handleChange = (e: any) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="input-label p-5" style={{ maxWidth }}>
      <label className={label_style_string}>{label}</label>
      <input
        className={input_style_string}
        type={type}
        name={name}
        value={inputValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default InputLabel;
