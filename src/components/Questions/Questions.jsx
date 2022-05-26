import PropTypes from "prop-types";
import{useEffect, useState} from 'react';
import axios from 'axios';


export default function Questions(props) {
    const [questions,setQuestions]= useState([])
    const {question} = props;

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${props.category}`)
        .then((res)=> {
            console.log(res.data.results)
            setQuestions(res.data.results)
        }) 
    }, [])
    
}

Questions.propTypes = {
    category: PropTypes.number
}