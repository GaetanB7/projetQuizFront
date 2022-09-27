import React from "react";
import { useState } from "react";
import Select from "react-select";

const AddReponse = ({reponse, setReponse,serviceList,setServiceList}) => {
  const initialReponseList = Object.freeze([
    {
      description: "",
      valid: false,
    },
  ]);


  const [reponseList, setReponseList] = useState(initialReponseList);

  const handleReponseChange = (e, index) => {
    const { name, value } = e.target;
    //const list = [...reponseList];
    const list = [...reponseList];
    list[index][name] = value;
    setReponseList(list);
    setReponse([list]);
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

console.log("serviceList")
console.log(serviceList)

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
                <div className="btn-ajout-reponse" onClick={handleServiceAdd}>
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
