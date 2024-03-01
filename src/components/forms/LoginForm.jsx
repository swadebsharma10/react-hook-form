import { useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const LoginForm = () => {
  const { register, handleSubmit } = useForm();

    const submitForm = (data) =>{
        console.log(data)
    }

  return (
    <div className="flex flex-col justify-center items-center">
      <form 
      onSubmit={handleSubmit(submitForm)}
      >
        <FieldSet label="Enter LogIn Details">
          <Field label="Email">
            <input
            {...register("email")}
              className="p-2 border box-border border-gray-400 w-[300px] rounded-md"
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
            />
          </Field>
          <Field label="Password">
            <input
            {...register("password")}
              className="p-2 border box-border border-gray-400 w-[300px] rounded-md"
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
            />
          </Field>
        </FieldSet>
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
