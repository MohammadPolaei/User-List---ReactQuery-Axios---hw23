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
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					{...register("name", { required: "username is required" })}
					placeholder="username"
				/>
				{errors.name && <p>{errors.name.message}</p>}
				<input
					{...register("email", {
						required: "email is required",
						pattern: {
							value: /\S+@\S+\.\S+/,
							message: "Invalid email",
						},
					})}
					placeholder="email"
				/>
				{errors.email && <p>{errors.email.message}</p>}
				<button type="submit" disabled={isPending}>
					{isPending ? "Adding into List ..." : "Add User"}
				</button>
			</form>
		</div>
	);
}

export default AddUser;
