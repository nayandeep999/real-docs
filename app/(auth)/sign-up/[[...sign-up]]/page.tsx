import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <main className="auth-page">
      <SignUp path="/sign-up" />
    </main>
  );
};

export default SignUpPage;
