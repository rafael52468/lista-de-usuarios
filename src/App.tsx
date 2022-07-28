import { useState, useEffect } from "react";
import { Table, TableBody, TableContainer, TableHead, TableRow, TableCell, Box, Typography } from "@mui/material";
import {User} from "./@types/types";
import { styled } from '@mui/material/styles';

const App = (props: any) => {
	const [users, setUsers] = useState<User[	]>([]);
  const [loading, setLoading] = useState(true); 

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/")
			.then((response) => response.json())
			.then((json) => {setUsers(json); setLoading(false)});
	});

	return (
		<Box className="App">
			<Typography variant="h3" sx={{textAlign: "center",}} >Lista de usuários</Typography>
			<Box className="card">
        {loading ? <h2>Carregando...</h2> : null}
				<TableContainer component={Box} sx={{width: '99vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
					<Table sx={{maxWidth: 500, textAlign: "center"}}>
						<TableHead>
							<TableRow>
								<TableCell></TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{users.map((user) => ( 
							<TableRow><TableCell sx={{textAlign: "center", fontSize: '20px', fontWeight: "bold", backgroundColor: 'lightgray'}} key={user.id}>{user.name}</TableCell></TableRow>
							))}
							
						</TableBody>
					</Table>
				</TableContainer>
			</Box>
		</Box>
	);
};

export default App;