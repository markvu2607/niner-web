import { FC } from "react";

import { LoginForm } from "./components/LoginForm";

const LoginPage: FC = () => {
  return (
    <main className="flex justify-center">
      <LoginForm />
    </main>
  );
};

export default LoginPage;
