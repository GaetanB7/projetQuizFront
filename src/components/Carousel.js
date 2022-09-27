
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Select from 'react-select'

const Carousel = () => {


    const [value, setValue] = useState("");
    const options = [
      { value: "chocolate", label: "Chocolate" },
      { value: "strawberry", label: "Strawberry" },
      { value: "vanilla", label: "Vanilla" },
      { value: "avocado", label: "Avocado" },
      { value: "mandarin", label: "Mandarin" },
      { value: "cherimoya", label: "Cherimoya" },
      { value: "pineapple", label: "Pineapple" },
      { value: "raspberries", label: "Raspberries" },
      { value: "watermelon", label: "Watermelon" },
      { value: "rhubarb", label: "Rhubarb" },
      { value: "quince", label: "Quince" },
      { value: "pomegranate", label: "Pomegranate" }
    ];
    const handleItemClick = value => {
      setValue(value);
      console.log(`Option selected:`, value);
    };

    return (
        <div style={{ paddingTop: "100px" }}>
<div className="col-sm">
        <Select
          placeholder="Please select ..."
          value={value}
          options={options}
          onItemClick={handleItemClick}
        />
      </div>
        </div>
    );
};

export default Carousel;