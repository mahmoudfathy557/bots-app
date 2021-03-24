import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleBotPage from './components/SingleBotPage';
import CreateBot from './components/CreateBot';
import Error from './components/Error';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact component={Home} />
				<Route exact path='/bots/create-bots' component={CreateBot} />
				<Route exact path='/bots/:id' component={SingleBotPage} />

				<Route component={Error} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
