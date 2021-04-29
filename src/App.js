import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import './App.css';

import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import Footer from './components/Footer';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <main className='py-3'>
          <Container>
            <Route path='/' component={HomeScreen} exact />
          </Container>
        </main>
        <Footer />
      </Router>
    </GlobalProvider>
  );
}

export default App;
