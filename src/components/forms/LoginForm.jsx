import { useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = (data) => {
    // console.log(data);
    const user ={email:'swadeb@gmail.com', password:'701012sm'};

    const found = data.email ===user.email && data.password ===user.password;

    if(!found){
        setError("root.random" ,{
            message: `User with email ${data.email} not found`,
            type:"random"
        })
    }
    
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter LogIn Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is required" })}
              className={`p-2 border box-border  w-[300px] rounded-md ${
                errors.email ? "border-red-600" : "border-gray-400"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Your password must be 8 characters",
                },
              })}
              className={`p-2 border box-border  w-[300px] rounded-md ${
                errors.password ? "border-red-600" : "border-gray-400"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
          </Field>
        </FieldSet>
          <div>{errors?.root?.random?.message}</div>
        <Field>
          <button
            className="text-md text-white text-md cursor-pointer p-1 border rounded-lg  bg-purple-500"
            type="submit"
          >
            Login
          </button>
        </Field>
      </form>
    </div>
  );
};

export default LoginForm;
