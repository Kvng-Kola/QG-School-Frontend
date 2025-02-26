import React from "react";

export default function InputField({
  label,
  type,
  register,
  name,
  defaultValue,
  error,
  inputProps,
}) {
  return (
    <>
      <div className="flex flex-col gap-2 w-full md:w-1/4 ">
        <label htmlFor="" className="text-sm text-gray-500">
          {label}
        </label>
        <input
          type={type}
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full "
          defaultValue={defaultValue}
          {...inputProps}
        />
        {error?.message && (
          <p className="text-red text-xs">
            {error.message.toString()}
          </p>
        )}
      </div>
    </>
  );
}
