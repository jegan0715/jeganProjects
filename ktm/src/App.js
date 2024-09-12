
  import './App.css';
  import  Form from './companent/Form';
  import Home from './companent/Home';
  import About from './companent/About';
  import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
  import { createContext,useState } from 'react';
  export const userContext=createContext()



  function App() {
    const [id,setId]=useState([])
    return (
      <userContext.Provider value={{id,setId}}>
        <BrowserRouter>
        <div>
          <Link className='L' to="/">Form</Link> <br/>
          <Link className='L' to="/home">Home</Link>  <br/>
          <Link className='L' to="/about">About</Link>  <br/>
        </div>
        <Routes>
        <Route  path="/"element={<Form/>}/>
        <Route  path="/home"element={<Home/>}/>
        <Route  path="/about"element={<About/>}/>
        </Routes>
        </BrowserRouter>
      </userContext.Provider>
    )
  }

  export default App;
