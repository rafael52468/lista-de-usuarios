import { Container, ListItem, ListItemText, List, Divider, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const TelaListaUsuarios = (props: any) => {
	const style = {
		width: '100%',
		maxWidth: 360,
		bgcolor: 'background.paper',
	};
	return (
		<Container>
			<h1>Lista de usuários</h1>
			<List sx={style} component="nav" aria-label="Lista de usuários" className="card">
				{props.loading ? <h2>Carregando...</h2> : null}
					{props.data.map((user: any) => (
						<ListItem button divider key={user.id}>{user.name}</ListItem>
					))}
					<Divider light />
			
			</List>

		

		</Container>
	);
};

export default TelaListaUsuarios;	