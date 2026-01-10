import React from "react";
import { useForm, FormProvider, FieldValues, DefaultValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormProps<TValues extends FieldValues> = { //Это ограничение говорит, что форма должна быть объектом, где ключи — строки.
  // Используем z.ZodType<TValues, any, any> чтобы разрешить любые входные данные,
  // при условии, что выходные соответствуют TValues
  schema: z.ZodType<TValues, any, any>;
  defaultValues?: DefaultValues<TValues>;
  // Делаем onSubmit асинхронным, чтобы handleSubmit понимал, когда форма закончила работу
  onSubmit: (data: TValues) => Promise<void> | void;
  // Позволяем детям быть функцией, чтобы получить доступ к состоянию формы напрямую
  children: React.ReactNode | ((methods: ReturnType<typeof useForm<TValues>>) => React.ReactNode);
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
    resolver: zodResolver(schema),
    defaultValues,
    mode: "onBlur",
  });

  return (
    <FormProvider {...methods}>
      <form 
        className={className} 
        onSubmit={methods.handleSubmit(onSubmit)} 
        noValidate
      >
        {/* Если children это функция — вызываем её, если нет — рендерим как обычно */}
        {typeof children === "function" ? children(methods) : children}
      </form>
    </FormProvider>
  );
}