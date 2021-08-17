import React from 'react'
import { useState } from 'react';
import './form.scss';



function Form(props) {
  let [showBox, setShowBox] = useState(false);
  let [method, setmethod] = useState('get');
  let [url, seturl] = useState('https://pokeapi.co/api/v2/pokemon');
  let [requestBody, setbodyText] = useState();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
    };
    props.handleApiCall(formData,requestBody);
  }
  function handlemethod(e) {
    setmethod(e.target.id);
  }
  function handleShowBox(e){
    setShowBox(true);
    setmethod(e.target.id);
  }
  function handlerUrl(e) {
    seturl(e.target.value);
  }
  function handelBodyText(e) {
    setbodyText(e.target.value)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span>URL: </span>
          <input name='url' type='text' onChange={handlerUrl} />
          <button type="submit" data-testid="formTest" >GO!</button>
        </label>
        <label className="methods">
          <span id="get"  onClick={handlemethod}>  GET  </span>
          <span id="post" onClick={handleShowBox}>  POST  </span>
          <span id="put" onClick={handleShowBox}>  PUT  </span>
          <span id="delete" onClick={handlemethod}>  DELETE  </span>
        </label>
        {showBox && <textarea  rows='10' cols='40' onChange={handelBodyText} />}
      </form>
    </>
  )
}

export default Form