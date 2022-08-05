import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { signupUser } from "./features/user/userSlice";

export default function App() {
	const signupState = useSelector((state) => state.signup);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(signupUser());
	}, []);

	return (
		<div>
			{signupState.isPending && <h3> Loading ...</h3>}
			{signupState.user && (
				<>
					<h1>{signupState.user.username} signed up. </h1>
					<p> Email: {signupState.user.email}</p>
				</>
			)}
		</div>
	);
}
