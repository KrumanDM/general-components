import React from "react";
import { useFormContext, FieldValues, Path, get } from "react-hook-form";
import Input from "../../ui/Input/Input";


type FormInputProps<TValues extends FieldValues> = {
  name: Path<TValues>;
  label: string;
  type?: string;
};

export function FormInput<TValues extends FieldValues>({
  name,
  label,
  type = "text",
}: FormInputProps<TValues>) {
  const {
    register,
    formState: { errors },
  } = useFormContext<TValues>();

  const error = get(errors, name);
  const message = error?.message as string | undefined;

  return (
    <div style={{ marginBottom: "1em" }}>
      <label>
        {label}
        <Input {...register(name)} type={type} />
      </label>
      {message && (
        <p style={{ color: "red", fontSize: "0.85em" }}>
          {message}
        </p>
      )}
    </div>
  );
}
