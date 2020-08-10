// App.js
import React from 'react';
import { Switch, Route, Router, Link } from 'react-router-dom'
import { createBrowserHistory } from 'history';

import './App.css';
import image1 from './img/image1.jpg';
import image2 from './img/image2.jpg';
import image3 from './img/image3.jpg';
import image4 from './img/image4.jpg';
import image5 from './img/image5.jpg';

const Page1 = () => <div className="page" style={{ backgroundImage: `url(${image1})`}} />;
const Page2 = () => <div className="page" style={{ backgroundImage: `url(${image2})`}} />;
const Page3 = () => <div className="page" style={{ backgroundImage: `url(${image3})`}} />;
const Page4 = () => <div className="page" style={{ backgroundImage: `url(${image4})`}} />;
const Page5 = () => <div className="page" style={{ backgroundImage: `url(${image5})`}} />;
const Footer = () => (
  <nav className="footer">
    <Link to='/'>Cat 1 </Link>
    <Link to='/2'>Cat 2</Link>
    <Link to='/3'>Cat 3</Link>
    <Link to='/4'>Cat 4</Link>
    <Link to='/5'>Cat 5</Link>
  </nav>
)

const history = createBrowserHistory()

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Page1} />
        <Route exact path="/2" component={Page2} />
        <Route exact path="/3" component={Page3} />
        <Route exact path="/4" component={Page4} />
        <Route exact path="/5" component={Page5} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;