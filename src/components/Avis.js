import React from "react";
import '../style/Avis.css';

const Avis = () => {
  return (
        <div className="container_bodyAvis"> <h2>Qu'en disent nos utilisateurs ?</h2>

    <div className="container_Avis container-fluid mb-5">

      <div className="card_Avis1">
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <div className="avatar">
            <img src="images/hacker.png" alt="" />
        </div>
        
        <h4>Bob Roberts</h4>
       
      </div>
      <div className="card_Avis2">
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        
        <div className="avatar">
          <img src="images/avatar.png" alt="" />
        </div>
        <h4>Nat Reynolds</h4>
      
      </div>
      <div className="card_Avis3">
        <p>Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
        <div className="avatar">
            <img src="images/man.png" alt="" />
        </div>
        
        <h4>Celia Almeda</h4>
      </div>
    </div>
    </div>
  );
};

export default Avis;
