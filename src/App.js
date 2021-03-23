import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
function App() {
	return (
		<Router>
			<Navbar />
			<Switch>
				<div className='home-container'>
					<Route path='/' exact component={Home} />
				</div>
				{/* <Route path="/products/:id" component={SingleProduct} /> */}
			</Switch>
		</Router>
	);
}

export default App;
