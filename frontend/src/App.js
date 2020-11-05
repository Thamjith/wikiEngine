// import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import ArticlesScreen from './templates/ArticlesScreen';
import LoginScreen from './templates/LoginScreen';
import RegisterScreen from './templates/RegisterScreen';
import HomeScreen from './templates/HomeScreen';
import CreateArtilcleScreen from './templates/CreateArtilcleScreen';
import ArticleDetailsScreen from './templates/ArticleDetailsScreen';
import UserProfileScreen from './templates/UserProfileScreen';
import ProfileUpdateScreen from './templates/ProfileUpdateScreen';

function App() {
  return (
    <Router>
    <Header />
    <main className='py-3'>
      <Container>
        <Route path='/profileUpdate' component={ProfileUpdateScreen} />
        <Route path='/profile' component={UserProfileScreen} />
        <Route path='/article/:id' component={ArticleDetailsScreen} />
        <Route path='/createArticle' component={CreateArtilcleScreen} />
        <Route path='/articles' component={ArticlesScreen} />
        <Route path='/login' component={LoginScreen} />
        <Route path='/register' component={RegisterScreen} />
        <Route path='/' component={HomeScreen} exact/>
      </Container>        
    </main>
    <Footer />
    </Router>
  );
}

export default App;
