import { z } from "zod";
import { Form } from "./Form";
import { FormInput } from "./FormInput";
import Button from "../../ui/Button/Button";

// Схема валидации
const loginSchema = z.object({
  email: z.string().email("Введите корректный email"),
  password: z.string().min(6, "Минимум 6 символов"),
});

//Автоматически создает интерфейс на основе схемы Zod. Вам не нужно описывать interface LoginFormValues вручную — Zod делает это за вас.
type LoginFormValues = z.infer<typeof loginSchema>;


export default function LoginForm() {
  const handleLogin = async (data: LoginFormValues) => {
    // Имитация запроса к API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Успешный вход:", data);
  };

  return (
    <Form<LoginFormValues>
      schema={loginSchema}
      defaultValues={{ email: "", password: "" }}
      onSubmit={handleLogin}
    >
      {/* Используем функцию, чтобы достать formState */}
      {({ formState: { isSubmitting } }) => (
        <>
          <FormInput<LoginFormValues> name="email" label="Email" type="email" />
          <FormInput<LoginFormValues> name="password" label="Пароль" type="password" />
          
          <Button 
            type="submit" 
            variant="primary" 
            size="medium"
            disabled={isSubmitting} // Блокируем кнопку
          >
            {isSubmitting ? "Вход..." : "Войти"}
          </Button>
        </>
      )}
    </Form>
  );
}

