import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../style/Categories.css'; 
import '../style/App.css';


const Categories = () => {

        const [categories, setCategories] = useState([]);

        const getCategories = () => {
            return axios.get('http://localhost:8082/api/categories')
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
                    categories.map(categories=>
                        <div>
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