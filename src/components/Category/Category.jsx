import PropTypes from "prop-types";
import{useEffect, useState} from 'react';
import axios from 'axios';

function Category(props) {
    const [isExpanded, setIsExpanded] = useState(false)
   
    const {id, name} = props;

    const handleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

  
    return(
        <>
           
           <h2 className="category-name">{name}</h2> 
         
        </>
    ); 
}

Category.propTypes = {
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired
}

export default Category;