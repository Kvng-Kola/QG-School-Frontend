import React from "react";

export default function InputField({
  label,
  type,
  register,
  name,
  defaultValue,
  error,
  inputProps,
  placeholder,
  serverErr,
  hidden,
  fullWidth,
  max,
  min,
}) {
  return (
    <>
      <div
        className={`flex flex-col gap-2 w-full ${
          fullWidth ? "w-full" : "md:w-1/4"
        } ${hidden ? "hidden" : ""}`}
      >
        <label htmlFor="" className="text-sm text-gray-500">
          {label}
        </label>
        <input
          autoComplete="off"
          max={max}
          min={min}
          type={type}
          {...register(name)}
          className="ring-[1.5px] ring-gray-300 p-2 rounded-md text-sm w-full "
          defaultValue={defaultValue}
          placeholder={placeholder}
          {...inputProps}
        />
        {error?.message && (
          <p className="text-red text-[10px]">{error.message.toString()}</p>
        )}
        {serverErr && <p className="text-red text-[10px]">{serverErr}</p>}
      </div>
    </>
  );
}
