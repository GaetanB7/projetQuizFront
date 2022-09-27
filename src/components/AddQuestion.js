import { useState } from "react";
import "../style/AddQuestion.css";
import AddReponse from "./AddReponse";


const AddQuestion = () => {
    const initialServiceList = Object.freeze([{
        description: "",
        image: "",
        numOrder:"",
        reponses :[],
        multiple:false
      }]);

    const [reponse, setReponse] = useState([]);
    const [serviceList, setServiceList] = useState(initialServiceList);
    const [addBtnQuestion, setAddBtnQuestion] = useState(false);


    const handleServiceChange = (e, index) => {
      const { name, value } = e.target;
      const list = [...serviceList];
      list[index][name] = value;
      list[index].reponses = reponse;
      console.log("index")
      console.log(list)
      setServiceList(list);
    };
  
    const handleServiceRemove = (index) => {
      const list = [...serviceList];
      list.splice(index, 1);
      setServiceList(list);
    };
  
    const handleServiceAdd = () => {
      setServiceList([...serviceList, {         description: "",
      image: "",
      numOrder:"",
      reponses : [{      description: "",
      valid: false,}],
      multiple:false}]);};




    return (
        <div className="AddQuestion">
            <div className="form-field">
        <label htmlFor="service">Question(s)</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services service-question">
            <div className="first-division">
                <label htmlFor="description">Question {index +1}</label>
              <input
                name="description"
                type="text"
                id="description"
                value={singleService.description}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              <label htmlFor="image">image</label>
                <input
                name="image"
                type="text"
                id="image"
                value={singleService.image}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              
            </div>
            {!addBtnQuestion && (serviceList.length - 1 === index &&  (
              <div className="ajout-question">
              <div className="btn-ajout-question" onClick={()=>setAddBtnQuestion(!addBtnQuestion)}>
                <h3>Ajoutez des réponses</h3>
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>

              ))}

            {addBtnQuestion &&(
                <AddReponse reponse={reponse} setReponse={setReponse} serviceList={serviceList} setServiceList={setServiceList}  />
                )
            }

            <div className="second-division">
              {serviceList.length !== 1 && (
                <div
        
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Supprimer la question</span>
                </div>
              )}
            </div>
            {serviceList.length - 1 === index &&  (
              <div className="ajout-question">
              <div className="btn-ajout-question" onClick={handleServiceAdd}>
                <h3>Ajoutez une question?</h3>
                <i class="fa-solid fa-plus"></i>
              </div>
            </div>
              )}
          </div>
        ))}
      </div>
      
        </div>
    );
};

export default AddQuestion;