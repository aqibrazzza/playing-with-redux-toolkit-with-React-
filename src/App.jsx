import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "./features/user/userSlice";

export default function App() {
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(signupUser());
	}, []);

	return (
		<div>
			{user.isPending && <h3> Loading ...</h3>}
			{user.user && (
				<>
					<h1>{user.user.username} signed up. </h1>
					<p> Email: {user.user.email}</p>
				</>
			)}
		</div>
	);
}
