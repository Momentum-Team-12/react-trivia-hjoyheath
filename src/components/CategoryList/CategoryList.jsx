import {useEffect, useState} from 'react';
import Category from '../Category';
import axios from 'axios';
import './CategoryList.css';

function CategoryList() {
  const [categories,setCategories]= useState([])

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then((res)=> {
        console.log(res.data.trivia_categories)
        setCategories(res.data.trivia_categories)
    }) 
}, [])

  return (
      <div className="category-list">
      {categories.map((cat) => (
            <Category {...cat}
            key={cat.id}/>
        ))}
      </div>
  )
}

export default CategoryList
