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
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
      />
    </>
  );
};

export default FormInput;
