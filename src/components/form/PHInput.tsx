import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  htmlFor: string;
  placeholder: string;
};

const PHInput = ({ type, name, label, htmlFor, placeholder }: TInputProps) => {
  return (
    <>
      {label ? (
        <label
          htmlFor={htmlFor}
          className="block text-gray-700 font-medium text-sm mb-1"
        >
          {label}
        </label>
      ) : null}

      <Controller
        name={name}
        render={({ field }) => (
          <Input {...field} type={type} id={name} placeholder={placeholder} />
        )}
      />
    </>
  );
};

export default PHInput;
