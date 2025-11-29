import { Link, useNavigate } from "react-router";
import Input from "../../components/input/input";
import { useState, type FormEvent } from "react";
import { auth } from "../../service/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const [ messageError, setMessageError ] = useState<string>("");

  const navigate = useNavigate();

  const ErrorMessage = () => {
    return (
      <div className="border-red-500 border-2 text-red-400 p-2 mb-4 rounded-md mt-4 p-4">
        <span>{messageError}</span>
      </div>
    );
  };

  const handle = (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setMessageError("E-mail ou senha invalidas")
      setError(true);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/admin", { replace: true});
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessageError(`Código: ${errorCode} - ${errorMessage} `);
        setError(true);
      });
  };

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <Link to="/">
        <h1 className="mt-11 text-white mb-7 font-bold text-5xl">
          Dev
          <span className="bg-gradient-to-r from-yellow-500 to-orange-400 bg-clip-text text-transparent">
            Link
          </span>
        </h1>
      </Link>

      <form className="flex flex-col max-w-xl w-full" onSubmit={handle}>
        <Input
          placeholder="E-mail"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.currentTarget.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.currentTarget.value)}
        />

        <button className="bg-blue-600 rounded-md p-2 text-lg border-0 font-medium hover:cursor-pointer">
          <span className="text-white">Entrar</span>
        </button>
      </form>
      {error && <ErrorMessage /> }
    </div>
  );
};

export default Login;
