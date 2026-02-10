import { useUsers } from "../hooks/useUsers";
import type { User } from "../types/types";

function UserList() {
	const { data, isLoading, isError } = useUsers();
	if (isLoading) {
		return <div>Loading . . .</div>;
	}
	if (isError) {
		return <div>Error ❌</div>;
	}

	return (
		<div>
			{data.map((user: User) => (
				<li key={user.id}>
					username : {user.name} - email : {user.email}
				</li>
			))}
		</div>
	);
}

export default UserList;
