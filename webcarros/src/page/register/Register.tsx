import { Link, Navigate, useNavigate } from 'react-router';
import logo from '../../assets/logo.svg';
import Container from '../../components/container/container';
import Input from '../../components/form/Input';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod/src/index.js';
import { createUserWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../../services/firebaseConfig';
import { useContext, useEffect } from 'react';
import  { useAuth } from '../../context/AuthContext';


const schema = z.object({
  name: z.string().min(2, { message: "O nome deve conter no mínimo 2 caracteres" }).nonempty({ message: "O nome é obrigatório" }),
  email: z.email({ message: "Digite um e-mail válido" }),
  password: z.string().min(6, { message: "A senha deve conter no mínimo 6 caracteres" }).nonempty({ message: "A senha é obrigatória" }),
});

type FormData = z.infer<typeof schema>;



const Register = () => {

  const navigate = useNavigate(); 
  const { handleInfoUser } = useAuth();

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: 'onChange',
  });

  useEffect(() => {
    signOut(auth).then(() => {
      console.log('Usuário deslogado com sucesso');
    });
  }, []);

  const handleAddNewUser = (data: FormData) => {

    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then(async (user) => {
        await updateProfile(user.user, {
          displayName: data.name
        });
        
        handleInfoUser({
          uid: user.user.uid,
          name: user.user.displayName,
          email: user.user.email
        });

        navigate('/dashboard');

      }).catch(error => {
        console.log("Erro ao tentar criar novo usuário ", error)
      })

  }

  return (
    <Container>
      <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4 '>
        <Link to='/' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300'>
          <img src={logo} alt="Web Cars" className='w-full' />
        </Link>

        <form className='bg-white max-w-xl w-full  rounded-lg flex flex-col gap-6 p-6 shadow-md items-center justify-center'
          onSubmit={handleSubmit(handleAddNewUser)}
        >
          <Input
            type='text'
            placeholder='Digite seu nome'
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            type='text'
            placeholder='Digite seu e-mail'
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type='password'
            placeholder='Digite sua senha'
            name="password"
            register={register}
            error={errors.password?.message}
          />

          <button type='submit' className='px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300 w-full ' >
            Cadastrar
          </button>
        </form>

        <span>Já possui cadastro? <Link to='/login' className='text-blue-500 hover:underline'>Entrar</Link></span>
      </div>
    </Container>
  )
}
export default Register;