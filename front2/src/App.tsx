import React from 'react';
import {RouterProvider} from "react-router-dom"
import {Router} from "../src/Routing/Router"
import { ThemeProvider, createTheme } from '@mui/material';

const theme = createTheme({
	typography: {
	  allVariants: {
		fontFamily: ['Press Start 2P','cersive'].join(","),
		textTransform: 'none',
	  },
	},
  });

function App() {
	return (
		<ThemeProvider theme={theme}>
			<RouterProvider router={Router}/>
		</ThemeProvider>
	)
}

export default App;
