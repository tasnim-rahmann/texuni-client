import { type FieldValues } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { setUser, type TUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { Button } from "antd";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Logging in");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };
      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;
      dispatch(setUser({ user: user, token: res.data.accessToken }));
      toast.success("Logged in", { id: toastId, duration: 2000 });
      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong!", { id: toastId, duration: 2000 });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <PHForm onSubmit={onSubmit}>
          <div className="mb-4">
            <PHInput
              type={"text"}
              name={"id"}
              label={"ID"}
              htmlFor={"id"}
              placeholder={"Enter you ID"}
            />
          </div>

          <div className="mb-4">
            <PHInput
              type={"text"}
              name={"password"}
              label={"Password"}
              htmlFor={"password"}
              placeholder={"Enter your password"}
            />
          </div>

          <Button htmlType="submit">Login</Button>
        </PHForm>

        <p className="text-center text-gray-500 text-sm mt-4">
          Forget Password?{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
