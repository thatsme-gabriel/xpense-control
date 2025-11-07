//#region imports UI components
import type { FC, FormEvent } from "react";
import { useState } from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import googleLogo from "@/assets/google-logo.png";
//#endregion

// Exemplo de logo do Google — ajuste o caminho conforme sua estrutura


// Tipagem clara para o estado de apresentação
interface PresentationText {
  field1: string;
  field2: string;
  field3: string;
  instruction1: string;
  instruction2: string;
}

const Login: FC = () => {
  const [presentation, setPresentation] = useState<PresentationText>({
    field1: "Welcome back!",
    field2: "",
    field3: "",
    instruction1: "Please enter your details.",
    instruction2: "",
  });

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const setLanguage = (lang: string) => {
    if (lang === "pt") {
      setPresentation({
        field1: "Bem-vindo de volta!",
        field2: "",
        field3: "",
        instruction1: "Por favor, insira seus dados.",
        instruction2: "",
      });
    } else {
      setPresentation({
        field1: "Welcome back!",
        field2: "",
        field3: "",
        instruction1: "Please enter your details.",
        instruction2: "",
      });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Exemplo de validação simples
    setEmailError("");
    setPasswordError("");
    setTimeout(() => {
      setLoading(false);
      // Simular erro de login
      setEmailError("We did not find a user with this email.");
      setPasswordError("Incorrect password");
    }, 1500);
  };

  return (
    <div className="min-h-screen min-w-screen bg-linear-to-br from-emerald-50 via-green-50 to-lime-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-md mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
        <CardHeader className="text-center pb-2">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-linear-to-r from-emerald-600 to-green-500 rounded-full flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                />
              </svg>
            </div>
          </div>
          <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
            Xpense Control
          </CardTitle>
          <CardDescription className="text-gray-600 mt-2">
            {presentation.instruction1}
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          <Button
            color="#ccc"
            variant="outline"
            className="w-full text-amber-50 border-2 border-gray-200 hover:border-emerald-200 hover:bg-emerald-50 transition-all duration-200 py-3"
          >
            <img src={googleLogo} alt="Google" className="w-5 h-5 mr-3" />
            <span>Login with Google</span>
          </Button>

          {/* Divider */}
          <div className="relative flex items-center my-4">
            <div className="flex-grow border-t border-gray-300/60"></div>
            <span className="px-3 text-sm text-gray-500 bg-white/80">
              or continue with email
            </span>
            <div className="flex-grow border-t border-gray-300/60"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <FieldSet>
              <FieldGroup className="space-y-4">
                <Field>
                  <FieldLabel
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700"
                  >
                    Email Address
                  </FieldLabel>
                  <Input
                    id="email"
                    type="email"
                    autoComplete="email"
                    aria-invalid={!!emailError}
                    className="mt-1 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 py-3"
                  />
                  {emailError && (
                    <FieldError className="text-red-500 text-sm mt-1">
                      {emailError}
                    </FieldError>
                  )}
                </Field>

                <Field>
                  <FieldLabel
                    htmlFor="password"
                    className="text-sm font-medium text-gray-700"
                  >
                    Password
                  </FieldLabel>
                  <Input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    aria-invalid={!!passwordError}
                    className="mt-1 border-2 border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all duration-200 py-3"
                  />
                  {passwordError && (
                    <FieldError className="text-red-500 text-sm mt-1">
                      {passwordError}
                    </FieldError>
                  )}
                </Field>

                <div className="flex items-center justify-between">
                  <Field orientation="horizontal" className="flex items-center space-x-2">
                    <Switch
                      id="newsletter"
                      className="data-[state=checked]:bg-emerald-600"
                    />
                    <FieldLabel
                      htmlFor="newsletter"
                      className="text-sm text-gray-600 cursor-pointer"
                    >
                      Subscribe to newsletter
                    </FieldLabel>
                  </Field>

                  <a
                    href="#"
                    className="text-sm text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
                  >
                    Forgot password?
                  </a>
                </div>
              </FieldGroup>

              <CardAction className="w-full mt-6">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-700 hover:to-green-600 text-white py-3 font-semibold shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-70"
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </CardAction>
            </FieldSet>
          </form>
        </CardContent>

        <CardFooter className="flex-col space-y-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <a
                href="#"
                className="font-semibold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                Sign up
              </a>
            </p>
          </div>

        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
