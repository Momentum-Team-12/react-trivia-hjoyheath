import{useEffect, useState} from 'react';
import axios from 'axios';

export function Category({}) {
    const [isExpanded, setIsExpanded] = useState(false)
    const [category,setCategory]= useState([])

    const handleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    useEffect(() => {
        axios.get('https://opentdb.com/api_category.php')
        .then((res)=> {
            console.log(res.data)
            setCategory(res.data)
        }) 
    }, [])
  
    return(
        <>
           <h1>React Trivia Game</h1>
           <h2 className="category-name">{category}</h2> 
           {isExpanded ? (
               <>
               <button onClick={handleExpanded}>Categories</button>
               </>
           ) : (
               <button onClick={handleExpanded}>Categories</button>
           )}
           
        </>
    ); 
}