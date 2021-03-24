import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleBotPage from './components/SingleBotPage';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<div className='home-container'>
					<Route path='/' exact component={Home} />
					<Route path='/bots/:id' exact component={SingleBotPage} />
				</div>
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
