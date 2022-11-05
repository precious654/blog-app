import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Newarticle from "./components/Newarticle";
import Section from "./components/Section";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Section /> } />
        <Route path='/article' element={ <Newarticle /> } />
      </Routes>
    </div>
  )
}

export default App;
