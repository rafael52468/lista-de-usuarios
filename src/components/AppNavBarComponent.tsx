import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const AppNavBar = (props: any) => {
	return (
		<AppBar position="static">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
        <Button color="inherit" onClick={() => props.onChangeScreen(0)}>Usuários</Button>
				<Button color="inherit" onClick={() => props.onChangeScreen(1)}>Tarefas</Button>
				<Button color="inherit" onClick={() => props.onChangeScreen(2)}>Login</Button>
			</Toolbar>
		</AppBar>
	);
}

export default AppNavBar;