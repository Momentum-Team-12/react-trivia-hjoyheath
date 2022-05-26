import PropTypes from "prop-types";
import{useEffect, useState} from 'react';
import axios from 'axios';

function Category(props) {
    
   
    const {id, name} = props;

   

  
    return(
        <>
           
           <h3 className="category-name">{name}</h3> 
         
        </>
    ); 
}

Category.propTypes = {
    id: PropTypes.number.isRequired, 
    name: PropTypes.string.isRequired
}

export default Category;