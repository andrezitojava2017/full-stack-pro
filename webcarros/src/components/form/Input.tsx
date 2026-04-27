import { useForm, type RegisterOptions, type SubmitHandler, type UseFormRegister } from "react-hook-form";

type inputProps = {
    type: string;
    placeholder: string;
    name: string;
    register: UseFormRegister<any>
    error?: string;
    rules?: RegisterOptions;

}

const Input = ({ type, placeholder, name, register, error, rules }: inputProps) => {



    return (
        <div className="w-full">
            <input
                className="w-full border-2 border-blue-400 outline-blue-600 rounded-md h-11 px-2"
                type={type}
                placeholder={placeholder}
                {...register(name, rules)}
                id={name}
            />
            {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        </div>

    );
}
export default Input;