// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import ArticlesScreen from './templates/ArticlesScreen';
import LoginScreen from './templates/LoginScreen';
import HomeScreen from './templates/HomeScreen';

function App() {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Route path='/articles' component={ArticlesScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/' component={HomeScreen} exact/>
      </Container>        
    </main>
    <Footer />
    </Router>
  );
}

export default App;
