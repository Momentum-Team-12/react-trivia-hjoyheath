import PropTypes from "prop-types";
import{useEffect, useState} from 'react';
import axios from 'axios';
import CategoryList from "../CategoryList";


export default function Questions(props) {
    const [questions,setQuestions]= useState([])
    const [isAnswered, setIsAnswered] = useState([false])
    

    useEffect(() => {
        axios.get(`https://opentdb.com/api.php?amount=10&category=${props.category}`)
        .then((res)=> {
            console.log(res.data.results)
            setQuestions(res.data.results)
        }) 
    }, []);
    
    return (
        <div className="container">
            {questions.length > 0 && (
                <fieldset>
                <h1>{questions[0].question}</h1>
                <div role="radio-group" aria-label={questions[0].question}>
                {questions[0].incorrect_answers.map((value, index) => (
                    <label key={index}>
                        {value}
                        <input type="radio" name="group-name"/>
                    </label>
            ))}
                </div>
                </fieldset>
            ) }
        </div>
    ) 

}
        

Questions.propTypes = {
    category: PropTypes.number
}