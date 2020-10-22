import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import Modal from "./Modal";
import Icon from "../assets/bi_plus.svg";

const AddTodo = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);
  const [content, setContent] = useState([]);


  const handleOnChange = (e) => {
    setValue(e.target.value);
    
    
  };
  const handleAdd = () => {
    setValue("");
    addTodo(value);
    setShow(!show);
  };

  const updateItems = () => {
    if (value) {
        setContent([...content, { text: value, checked: false }]);
      setValue("");
    }
  };


    console.log(value,'hhhhhhhhhhhhhhh')
  return (
    <>
     
      <img className="img" src={Icon} onClick={handleAdd}/>
      <Modal
        handleAdd={handleAdd}
          show={show}
         onChange={handleOnChange} value={value} updateItems={updateItems}/>
    </>
  );
};

export default connect(null, { addTodo })(AddTodo);
