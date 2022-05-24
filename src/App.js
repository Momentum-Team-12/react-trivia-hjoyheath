import {useEffect, useState} from 'react';
import CategoryList from './components/CategoryList';
import './App.css';


function App() {
  // const [categories,setCategories]= useState([])



  return (
    <div className="container">
      <h1> Let's Play Trivia</h1>
        <CategoryList></CategoryList>
    </div>
  )
}

export default App
