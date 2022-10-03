import { useState } from "react";
import "../style/AddQuestion.css";
import AddReponse from "./AddReponse";
import axios from "axios";
import { url } from "../services/AuthApi";
import { ToastContainer, toast } from "react-toastify";

const AddQuestion = ({ question, setQuestion, id }) => {
  const initialServiceList = Object.freeze([
    {
      description: "",
      image: "",
      numOrder: "",
      reponses: [],
      multiple: false,
      quiz:{
        id:id
      }
    },
  ]);
  
  console.log("id de quiz")
  console.log(id)

  //  const [reponse, setReponse] = useState([]);
  const [serviceList, setServiceList] = useState(initialServiceList);
  const [addBtnQuestion, setAddBtnQuestion] = useState(false);
  const [questionId, setQuestionId] = useState(null);
  const [questionTarget, setQuestionTarget] = useState();

  const displayBtn = () => {
    setAddBtnQuestion(!addBtnQuestion);
  };



  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    list[index].quiz.id = id;
    //      list[index].reponses = reponse;
    setServiceList(list);
    //    setQuestion(serviceList);
    setQuestionTarget(list[index])
console.log("question1")
console.log(questionTarget)
console.log("index")
console.log(index)
console.log("id")
console.log(id)
  };


  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([
      ...serviceList,
      {
        description: "",
        image: "",
        numOrder: "",
        reponses: [],
        multiple: false,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post(url + "/api/question/add", questionTarget)
    .then((response) => {
      toast.success(response);
      toast.success("Quiz mis  jour!")
      setQuestionId(response.data.id)
      console.log(response);
    })
    .catch((response) => {
      console.log(response);
      toast.error(response.response.data);
    });
  };

  const click = (e)=>{
    displayBtn();
    handleSubmit(e);
    handleServiceAdd()
  }

  console.log("serviceList")
  console.log(serviceList)

  return (
    <div className="AddQuestion">
      <div className="form-field">
        <label htmlFor="service">Question(s)</label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services service-question">
            <div className="first-division">
              <label htmlFor="description">Question {index + 1}</label>
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
            {!addBtnQuestion && serviceList.length - 1 === index && (
              <div className="ajout-question">
                <div
                  className="btn-ajout-question"
                  onClick={click}
                >
                  <h3>Ajoutez des réponses</h3>
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            )
            }

            {addBtnQuestion && (
              <AddReponse questionId={questionId} /> //reponse={reponse} setReponse={setReponse} serviceList={serviceList} setServiceList={setServiceList} i={index}
            )}

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
            {serviceList.length - 1 === index && (
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
