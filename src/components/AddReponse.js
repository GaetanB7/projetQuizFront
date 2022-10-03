import React from "react";
import { useState } from "react";
import axios from "axios";
import { url } from "../services/AuthApi";
import {toast } from "react-toastify";

const AddReponse = ({reponse, setReponse,serviceList,setServiceList,i,questionId}) => {
  const initialReponseList = Object.freeze([
    {
      description: "",
      valid: false,
      question:{
        id:questionId
      }
    },
  ]);


  const [reponseList, setReponseList] = useState(initialReponseList);
  const [reponseTarget, setReponseTarget] = useState();

  const handleReponseChange = (e, index) => {
    // const { name, value } = e.target;
    // const list = [...reponseList];
    // list[index][name] = value;
    // setReponseList(list);
    // const rep = {reponses :reponseList};
    // const listFinale = [...serviceList];
    // listFinale[i].reponses = rep;
    // setServiceList(listFinale)

    const { name, value } = e.target;
    const list = [...reponseList];
    list[index][name] = value;
    list[index].question.id = questionId;
    setReponseList(list);
    setReponseTarget(list[index])
    console.log("reponseTarget")
    console.log(reponseTarget)

  };

  const handleReponseRemove = (index) => {
    const list = [...reponseList];
    list.splice(index, 1);
    setReponseList(list);
    setReponse(list);
  };

  const handleServiceAdd = () => {
    setReponseList([...reponseList, { description: "", valid: false }]);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(url + "/api/reponse/add", reponseTarget)
    .then((response) => {
      toast.success(response);
      toast.success("réponse ajouté!")
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
      toast.error(response.response.data);
    });
  };

  const click = (e)=>{
    handleSubmit(e);
    handleServiceAdd()
  }

  return (
    <div className="AddReponse">
      <div className="form-field">
        <label htmlFor="service">Réponse(s)</label>
        {reponseList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <label htmlFor="description">Reponse {index + 1}</label>
              <div>
                <input
                  name="description"
                  type="text"
                  id="description"
                  value={singleService.description}
                  onChange={(e) => handleReponseChange(e, index)}
                  required
                />
                {reponseList.length !== 1 && (
                  <i
                    class="fa-solid fa-xmark delete-cross"
                    onClick={() => handleReponseRemove(index)}
                  ></i>
                )}
              </div>
              <div>
                <label htmlFor="valid">reponse juste?</label>
                <input
                  name="valid"
                  type="checkbox"
                  id={index}
                  value={true}
                  onChange={(e) => handleReponseChange(e, index)}
                  required
                />
              </div>
            </div>

            {reponseList.length - 1 === index && reponseList.length < 4 && (
              <div className="ajout-reponse">
                <div className="btn-ajout-reponse" onClick={click}>
                  <h3>Ajoutez une reponse?</h3>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AddReponse;
