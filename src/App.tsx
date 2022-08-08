import { Container, Typography } from "@mui/material";
import { useState, useEffect } from "react";

import AppNavBar from "./components/AppNavBarComponent";
import TelaListaTarefas from "./pages/TelaTarefas";
import TelaListaUsuarios from "./pages/TelaUsuarios";

const App = (props: any) => {
	const [users, setUsers] = useState([
		{ id: 1, name: "" },
		{ id: 2, name: "" },
	]);
	const [loading, setLoading] = useState(true);
	const [tela, setTela] = useState(1);
	const telas = [
		<TelaListaUsuarios data={users} loading={loading} />,
		<TelaListaTarefas user={ {id: 2, name: "Ervin Howell"} } />,
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