import React from "react";
import { z } from "zod";
import { Form } from "./Form";
import { FormInput } from "./FormInput";
import Button from "../../ui/Button/Button";

// Схема валидации
const loginSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
});

// Тип формы выводится из схемы
type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginForm() {
  return (
    // Передаем только один дженерик — TValues
    <Form<LoginFormValues>
      schema={loginSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={(data) => {
        console.log("Form data:", data); // data будет LoginFormValues
      }}
    >
      <FormInput<LoginFormValues> name="email" label="Email" type="email" />
      <FormInput<LoginFormValues> name="password" label="Пароль" type="password" />
      <Button type="submit" variant="primary" size="medium">
        Войти
      </Button>
    </Form>
  );
}
