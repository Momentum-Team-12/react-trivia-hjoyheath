import {useEffect, useState} from 'react';
import Category from '../Category';
import Questions from '../Questions';
import axios from 'axios';
import './CategoryList.css';

function CategoryList() {
  const [categories,setCategories]= useState([])
  const handleClick = (category) => {setSelectedCategory(category)}
  const [selectedCategory, setSelectedCategory] = useState(false)

  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then((res)=> {
        console.log(res.data.trivia_categories)
        setCategories(res.data.trivia_categories)
    }) 
}, [])


  return (
      selectedCategory ? <Questions category={selectedCategory}/> :
      <div className="category-list">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => {
                console.log(cat.id);
                handleClick(cat.id);
          }}
        ><Category {...cat}
            /></button>
        ))}
      </div>
      
      
  )
}

export default CategoryList
