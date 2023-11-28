import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
// import api from "../../services/api";

export default function NewUpdate(){
  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Multimeters Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform">

          <div className="form-group">
            <label htmlFor="###">###</label>
            <input data-testid="input1" id="###" type="text" style={{marginBottom: '20px'}} 
            className="form-control" placeholder="###"></input>
          </div>

          <div className="form-group">
            <label htmlFor="###">###</label>
            <input data-testid="input2" id="###" type="text" style={{marginBottom: '20px'}}
            className="form-control" placeholder="###"></input>
          </div>

          <button data-testid="btnenviar" 
          type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>
  );
}