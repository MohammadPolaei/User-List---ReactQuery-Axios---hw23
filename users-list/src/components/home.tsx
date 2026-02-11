import AddUser from "./AddUser";
import UserList from "./UserList";

function Home() {
	return (
		<div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-950 to-indigo-950 flex flex-col gap-10 items-center justify-center p-6">
			<AddUser />
			<UserList />
		</div>
	);
}

export default Home;
