import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import AppRoutes from "./AppRoutes";
import TelaListaTarefas from "./pages/TelaTarefas";
import TelaListaUsuarios from "./pages/TelaUsuarios";
import TelaLogin from "./pages/LoginPage/TelaLogin";
import AppNavBar from "./components/AppNavBarComponent";



const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "" },
		{ id: 2, name: "" },
	]);
	const [loading, setLoading] = useState(true);
	const [tela, setTela] = useState(2);
	const telas = [
		<TelaListaUsuarios data={users} loading={loading} />,
		<TelaListaTarefas user={ {id: 2} } />,
		<TelaLogin />
	];

  const handleMudancaTela = (index: number) => {
    setTela(index);
  }

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {
				setUsers(json);
				setLoading(false);
			});
	});
	return (
		<Container maxWidth="sm">
			<AppNavBar onChangeScreen={handleMudancaTela} />
			{telas[tela]}
		</Container>
			
	);
};

export default App;