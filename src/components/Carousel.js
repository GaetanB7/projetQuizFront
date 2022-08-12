import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Carousel = () => {

    const notify = () => toast("Wow so easy !");
    return (
        <div style={{ paddingTop: "100px" }}>
          <button onClick={notify}>Notify !</button>
        <ToastContainer />
        </div>
    );
};

export default Carousel;