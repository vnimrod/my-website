import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage';

const App = () => {
  return (
    <Router>
      <Route>
        <HomePage exact path="/" />
      </Route>
    </Router>
  );
};

export default App;
