import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import './App.css';
import Test from './components/pages/Test/Test.js';
import { createTheme, ThemeProvider } from '@mui/material';

const App = () => {

    const theme = createTheme({
        typography: {
          fontFamily: [
            'Montserrat',
          ].join(','),
        },});
    
    return (
        <ThemeProvider theme={theme}>
            <Switch>
                <Route exact={true} path="/" component={Home} />
                <Route exact={true} path="/test" component={Test} />
            </Switch>
        </ThemeProvider>
    )
};

export default App;
