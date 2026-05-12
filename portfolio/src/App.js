import './App.css';
import { Routes , Route } from 'react-router-dom';
import Layout from './Pages/Layout';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes> 
    
    </div>
  );
}

export default App;
