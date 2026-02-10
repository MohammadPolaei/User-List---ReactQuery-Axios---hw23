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
	};

	return (
		<div>
			<form onSubmit={() => handleSubmit(onSubmit)}>
				<input
					{...register("name", { required: "username is required" })}
					placeholder="username"
				/>
				{errors.name && <p>{errors.name.message}</p>}
				<input {...register("email", { required: "" })} placeholder="email" />
				{errors.email && <p>{errors.email.message}</p>}
				<button disabled={isPending}>Add User</button>
			</form>
		</div>
	);
}

export default AddUser;
