import { Route, Routes } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import AddUser from "../Pages/AddUser/AddUser";
import UserDetails from "../Pages/UserDetails/UserDetails";

const Routers = () => {
	return (
		<Routes>
			<Route
				path="/"
				element={<MainLayout></MainLayout>}
			>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route 
					path="/user/:id" 
					element={<UserDetails />} 
				/>
				<Route
					path="/add-user"
					element={<AddUser />}
				/>
			</Route>
		</Routes>
	);
};

export default Routers;
