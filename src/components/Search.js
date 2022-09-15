import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/Search.css';
import { Link} from "react-router-dom";
import { url } from '../services/AuthApi';

const Search = () => {

  const [search, setSearch] = useState();
  const [quizData, setQuizData] = useState([]);
  
  useEffect(() => {
    axios
    .get(url+`/api/quiz/${search}`)
    .then((res)=> setQuizData(res.data))
  }, [search]);
    
  return (
  <div>
        <div className="form-outline d-flex ">
        <input type="search" id="form1" className="form-control inputCustom  fs-5" placeholder='search ...' onChange={(e) => setSearch(e.target.value)} />
        {/* <button type="button" className="btn btnCustom">
          <img className='icones' src="images/search.png" alt="search" />
        </button> */}


      </div>

      <ul className='result'>
          {search &&(
              quizData
              .slice(0,8)
              .map((quiz, index)=>
              <Link key={index} to={`/quiz/${quiz.id}`} onClick={()=>setSearch(null)}><li>{quiz.titre} ({quiz.niveau})</li></Link>
              )
          )}
        </ul>
  </div>


  
  );
};

export default Search;