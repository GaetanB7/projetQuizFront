import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../style/Categories.css'; 
import '../style/App.css';
import { url } from '../services/AuthApi';



const Categories = () => {

        const [categories, setCategories] = useState([]);

        const getCategories = () => {
            return axios.get(url+'/api/categories')
            .then((result) => setCategories(result.data));
        }

        useEffect(() => {
           getCategories();
          }, []);



    return (

         <div className='categorie'>
         <div className='Card'>
    <div className="fondCategorie">
        <div  className="card border-0" >
            <div className="card-header ">Liste des categories</div>

            <div className="card-body" >
                {
                    categories.map((categories,index)=>
                        <div key={index}>
                            <img src={categories.image}  className="card-img-bottom" alt="..." />
                            <p className='titreCategorie'>{categories.titre}</p>
                        </div>

                    )

                }
            </div>
        </div>
        </div>
        </div>

        </div> 
    );
};


export default Categories;