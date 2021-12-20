
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Header} from './components/Header'
import {Footer} from './components/Footer'
import {Home} from './pages/Home'
import {About} from './pages/About'
import {NotFound} from './pages/NotFound'
import { Category } from './pages/Category';
import {Recipe} from './pages/Recipe';
function App() {
  return (
    <>
     <Router basename='/FirstSPA-Dish-recipes' >
    <Header />
      <main className='container content'>
          <Switch>
            <Route path='/' exact  component={Home} />
            <Route path='/about' component={About} />
            <Route path='/category/:name' component={Category} />
            <Route path='/meal/:id' component={Recipe} />
            <Route component={NotFound} />
          </Switch>
      </main>
      <Footer />
      </Router>
    </>
  );
}

export default App;
