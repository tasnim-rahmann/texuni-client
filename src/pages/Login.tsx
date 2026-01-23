import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [login, { data, error }] = useLoginMutation();

  console.log("data = ", data);
  console.log("error = ", error);
  const onSubmit = (data) => {
    login(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="id"
              className="block text-gray-700 font-medium mb-1"
            >
              ID
            </label>
            <input
              type="text"
              id="id"
              placeholder="Enter your ID"
              {...register("id")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              {...register("password")}
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition-colors cursor-pointer"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-4">
          Forget Password?{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
