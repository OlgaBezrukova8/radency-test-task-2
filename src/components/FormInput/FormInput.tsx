import { FormInputProps } from "../../types";

const FormInput: React.FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </>
  );
};

export default FormInput;
