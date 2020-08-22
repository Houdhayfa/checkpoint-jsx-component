import React from 'react'
import '../src/css/bootstrap.css'
import '../src/Form.css'

function Form() {
    return (
      <form className="Form ">
  <div className="form-group">
    <label for="exampleFormControlInput1">Please insert your name</label>
    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Your name"></input>
  </div>
 
  <div className="form-group">
    <label for="exampleFormControlTextarea1">Please insert your adress</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your adress" ></textarea>
  </div>
  <button className="btn btn-dark">insert</button>
</form>
    )
}

export default Form
