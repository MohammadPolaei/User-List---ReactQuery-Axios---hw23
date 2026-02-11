import { useForm } from "react-hook-form";
import { useCreateUser } from "../hooks/useCreateUser";
import type { User } from "../types/types";

function AddUser() {
	const { mutate, isPending } = useCreateUser();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<User>();

	const onSubmit = (data: User) => {
		mutate(data, {
			onSuccess: () => reset(),
		});
		console.log(data);
	};

	return (
		<div
			className="w-1/2 backdrop-blur-xl bg-white/5 border border-white/10 
       rounded-2xl shadow-2xl p-6"
		>
			<form
				className="text-sm font-semibold text-slate-100 flex flex-col justify-between gap-5"
				onSubmit={handleSubmit(onSubmit)}
			>
				<input
					className="w-full h-11 px-4 rounded-lg 
       bg-white/5 border border-white/10
       text-slate-100 placeholder-slate-400
       outline-none 
       focus:border-blue-400
       transition duration-500"
					{...register("name", { required: "username is required" })}
					placeholder="username"
				/>
				<p className="text-red-400 text-[10px]">
					{errors.name && <p>{errors.name.message}</p>}
				</p>
				<input
					className="w-full h-11 px-4 rounded-lg 
		bg-white/5 border border-white/10
		text-slate-100 placeholder-slate-400
		outline-none 
		focus:border-blue-400
		transition duration-500"
					{...register("email", {
						required: "email is required",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Invalid email",
						},
					})}
					placeholder="email"
				/>
				<p className="text-red-400 text-[10px]">
					{errors.email && <p>{errors.email.message}</p>}
				</p>
				<button
					type="submit"
					disabled={isPending}
					className="w-full h-11 rounded-lg font-medium text-white
       bg-linear-to-r from-blue-500 to-blue-600
       hover:shadow-2xl hover:shadow-blue-500/40 hover:rounded-2xl
       transition-all duration-500 cursor-pointer"
				>
					{isPending ? "Adding into List ..." : "Add User"}
				</button>
			</form>
		</div>
	);
}

export default AddUser;
