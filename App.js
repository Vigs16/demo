import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux';
import Login from './components/Login.js';
import SearchAndPanels from './components/SearchAndPanels.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useStyles from './style/style.js';

function App() {
	const classes = useStyles();
	const isUserAuthenticated = useSelector(state => state.isUserAuthenticated);
	return (
		<div className={classes.pageBackground}>
			  {isUserAuthenticated ? <SearchAndPanels /> : <Login />}
			<ToastContainer />
		</div>
	);
}

export default App;
