import React from "react";
import { useForm, FormProvider, FieldValues, DefaultValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type AnyObject = Record<string, unknown>;

type FormProps<TValues extends FieldValues> = {
  // Используем z.ZodType<TValues, any, any> чтобы разрешить любые входные данные,
  // при условии, что выходные соответствуют TValues
  schema: z.ZodType<TValues, any, any>;
  defaultValues?: DefaultValues<TValues>;
  onSubmit: (data: TValues) => void;
  children: React.ReactNode;
  className?: string;
};

export function Form<TValues extends FieldValues>({
  schema,
  defaultValues,
  onSubmit,
  children,
  className,
}: FormProps<TValues>) {
  const methods = useForm<TValues>({
    // Теперь типы сойдутся автоматически
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <form className={className} onSubmit={methods.handleSubmit(onSubmit)} noValidate>
        {children}
      </form>
    </FormProvider>
  );
}