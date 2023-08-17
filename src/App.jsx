import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Upgrade from './pages/Upgrade';
import Renew from './pages/Renew';
import { ChakraProvider, Container } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function App() {
  return (
    <ChakraProvider>
      <style>
        {`
          html, body {
            background-color: #1e1e1e;
            margin: 0;
            padding: 0;
            color: white;
          }
        `}
      </style>
      <Container maxW="container.lg">
        <Navbar />
        <Router>
          <Switch>
            <Route exact path="/" component={Upgrade} />
            <Route exact path="/upgrade" component={Upgrade} />
            <Route exact path="/renew" component={Renew} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    </ChakraProvider>
  );
}
