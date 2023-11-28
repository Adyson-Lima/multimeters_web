import { Link, useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
// import api from '../../services/api';

export default function Multimeters(){
  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Multimeters Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-success" style={{marginBottom: '10px'}}
            to="/newupdate/0">Novo
        </Link>

        <table data-testid="mytable" className="table table-hover">
            <thead>
              <tr>
                <th scope="col">##</th>
                <th scope="col">##</th>
                <th scope="col">##</th>
                <th scope="col">##</th>
              </tr>
            </thead>
            <tbody>            
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td>
                  <button data-testid="mybtn1" type="button" 
                  className="btn btn-outline-info">Editar</button>
                </td>
              </tr>        
            </tbody>
        </table>
      </div>
    </div>
  );
}