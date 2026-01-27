import { Form, Input } from "antd";
import { Controller } from "react-hook-form";

type TInputProps = {
  type: string;
  name: string;
  label?: string;
  placeholder: string;
};

const PHInput = ({ type, name, label, placeholder }: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <Form.Item label={label}>
            <Input {...field} type={type} id={name} placeholder={placeholder} />
          </Form.Item>
        )}
      />
    </>
  );
};

export default PHInput;
