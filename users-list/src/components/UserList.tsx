import { useUsers } from "../hooks/useUsers";
import type { User } from "../types/types";

function UserList() {
	const { data, isLoading, isError } = useUsers();
	if (isLoading) {
		return (
			<div
				className="w-1/2 backdrop-blur-xl bg-white/20 border border-white/10 
		 rounded-2xl shadow-2xl p-6"
			>
				<span className="text-white/70 animate-ping">Loading . . .</span>
			</div>
		);
	}
	if (isError) {
		return (
			<div
				className="w-1/2 backdrop-blur-xl bg-white/20 border border-white/10 
 rounded-2xl shadow-2xl p-6"
			>
				<span className="text-red-500 font-bold text-2xl">ERROR !</span>
			</div>
		);
	}

	return (
		<div
			className="w-1/2 backdrop-blur-xl bg-white/5 border border-white/10 
       rounded-2xl shadow-2xl p-6"
		>
			{data.map((user: User) => (
				<li
					key={user.id}
					className="flex flex-col justify-between items-left 
       py-3 px-2 rounded-lg
       hover:bg-white/5 transition"
				>
					<span className="text-slate-200">
						<span className="text-emerald-500">username :</span> {user.name}
					</span>
					<span className="text-slate-400 text-sm">
						<span className="text-blue-400">email :</span> {user.email}
					</span>
				</li>
			))}
		</div>
	);
}

export default UserList;
