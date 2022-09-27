import React, { useState } from 'react';


const ToogleBar = ({isActive,setIsActive}) => {
    return (
            <div class="topbar">
                <div class="toggle" onClick={()=>setIsActive(!isActive)}>
                    <img src="images/burger.png" alt=""/>
                </div>



                <div class="user">
                    <img src="assets/image/munu.jpg" alt=""/>
                </div>
            </div>    
            
    );
};

export default ToogleBar;