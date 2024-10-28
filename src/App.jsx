import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import About from './pages/About/About'
import DatilsBlog from './pages/DatilsBlog/DatilsBlog'
import Newsletter from './pages/Newsletter/Newsletter'
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';
import { ThemeContext } from './components/Context/ThemeContext';
import { useSelector } from 'react-redux';

function App() {
  const id = useSelector((state) => state.blogs.idBost);
    const dataLink =[
    {path :`/datilsBlog/DatilBlogById/${id}`,link:'Blog'},
    {path:'/projects',link:'Projects'},
    {path:'/about',link:'About'},
    {path:'/newsletter',link:'Newsletter'},
  ]
  const [theme , setTheme] = useState('light')
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
    <div className={`${theme} font-inter
    ${theme == 'dark' ? 'bg-darkMode' : 'null'}`}>
    <NavBar userName='Lourina Karkoa' path={'/'} dataLink={dataLink}/>
    <Routes>
      <Route path ='/' element ={<Home/>} />
      <Route path ='/projects' element ={<Projects/>} />
      <Route path ='/about' element={<About/>} />
      <Route path ='/datilsBlog/DatilBlogById/:id' element={<DatilsBlog/>} />
      <Route path = '/newsletter' element ={<Newsletter/>} />
    </Routes>
    <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}

export default App;