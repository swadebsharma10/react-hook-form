import { useFieldArray, useForm } from "react-hook-form";
import Field from "../Field";
import FieldSet from "../FieldSet";

const RegistrationForm = () => {

      const {
            register,
            handleSubmit,
            formState: { errors },
            control,
          } = useForm();

          const {fields, append, remove} = useFieldArray({
            name: 'socials',
            control,
          });
        
          // fromData
          const submitForm = (data) => {
            console.log(data);     
          };

      return (
            <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Register Details">
          <Field label="FullName" error={errors.name}>
            <input
              {...register("name", { required: "Name is required" })}
              className={`p-2 border box-border  w-[300px] rounded-md ${
                errors.name ? "border-red-600" : "border-gray-400"
              }`}
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Name"
            />
          </Field>
          <Field label="Age" error={errors.age}>
            <input
              {...register("age", { required: 'Age is required',
                  max:{
                        value: 100,
                        message: 'Age must be between 0 and 100'
                  }
             
            })}
              className={`p-2 border box-border  w-[300px] rounded-md ${
                errors.age ? "border-red-600" : "border-gray-400"
              }`}
              type="number"
              name="age"
              id="age"
              placeholder="Enter your Age"
            />
          </Field>
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

        <FieldSet label='Enter Social Handles'>
              {
                fields.map((field, index)=>{
                  return (
                    <div className="flex justify-between items-center w-max" key={index}>
                    <Field label="Socials" error={errors.socials}>
                    <input
                      {...register(`socials[${index}].name`, { required: "Socials is required" })}
                      className={`p-2 border box-border  w-[300px] rounded-md ${
                        errors.name ? "border-red-600" : "border-gray-400"
                      }`}
                      type="text"
                      name={`socials[${index}].name`}
                      id={`socials[${index}]`}
                      placeholder="Enter your socials"
                    />
                   </Field>
                    <Field label="SocialURL" error={errors.socials}>
                    <input
                      {...register(`socials[${index}].url`, { required: "Socials is required" })}
                      className={`p-2 border box-border  w-[300px] rounded-md ${
                        errors.name ? "border-red-600" : "border-gray-400"
                      }`}
                      type="text"
                      name={`socials[${index}].url`}
                      id={`socials[${index}]`}
                      placeholder="Enter your socialURL"
                    />
                   </Field>
                   <button
                   className="mt-8 mr-2 text-red-500 font-bold"
                   onClick={()=>remove(index)}>
                     Remove
                   </button>
                    </div>
                  )
                })
              }

              <button
              className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
              onClick={()=>append({name:"", url: ""})}
              >
              Add a Social Handle
              </button>
        </FieldSet>
          <div>{errors?.root?.random?.message}</div>
        <Field>
          <button
            className="text-md text-white text-md cursor-pointer p-1 border rounded-lg  bg-purple-500"
            type="submit"
          >
           Register
          </button>
        </Field>
      </form>
    </div>
      );
};

export default RegistrationForm;