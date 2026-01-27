import type { FieldValues, SubmitHandler } from "react-hook-form";
import PHForm from "../../../components/form/PHForm";
import PHInput from "../../../components/form/PHInput";
import { Button, Col, Flex } from "antd";

const CreateAcademicSemester = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <Flex justify="center" align="center">
      <Col
        span={6}
        style={{
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          borderRadius: "12px",
          background: "#fff",
        }}
      >
        <PHForm onSubmit={onSubmit}>
          <div style={{ marginBottom: "12px" }}>
            <PHInput type="text" name="name" label="Name" placeholder="Fall" />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <PHInput type="text" name="year" label="Year" placeholder="2025" />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <PHInput type="text" name="code" label="Code" placeholder="03" />
          </div>

          <div style={{ marginBottom: "12px" }}>
            <PHInput
              type="text"
              name="startMonth"
              label="Start Month"
              placeholder="September"
            />
          </div>

          <div style={{ marginBottom: "16px" }}>
            <PHInput
              type="text"
              name="endMonth"
              label="End Month"
              placeholder="December"
            />
          </div>

          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </PHForm>
      </Col>
    </Flex>
  );
};

export default CreateAcademicSemester;
