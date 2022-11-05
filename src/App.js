import logo from './logo.svg';
import './App.css';
import Sidebar from '../src/Components/Sidebar';
import Main from '../src/Components/Main';

const App = () => {
  return (
    <div className="App">
      <Sidebar />
      <Main />
    </div> 
  );
};
export default App;
