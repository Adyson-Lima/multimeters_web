import { Link, useNavigate, useParams } from "react-router-dom";
import React,{useState, useEffect} from "react";
import api from '../../services/api';

export default function Multimeters(){

  const [my_multimeters, setMultimeters] = useState([]);
  const navigate = useNavigate();

  // READ, carrega dados da api
  useEffect(() => {
    api.get("api/v1/multimeters",{})
    .then(response => {setMultimeters(response.data)})
  },[]);

  // UPDATE, atualiza dados na api
  async function updateMultimeter(id){
    try{
      navigate(`/newupdate/${id}`);
    }catch(erro){
      alert("Erro ao atualizar!");
    }
  }

  // DELETE, exclui dados na api
  async function deleteMultimeter(id){
    try{
      await api.delete(`api/v1/multimeters/${id}`,{});
      setMultimeters(my_multimeters.filter(multimeter => multimeter.id !== id));
    }catch(erro){
      alert("Erro ao excluir!");
    }
  }

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
                <th scope="col">ID</th>
                <th scope="col">Tipo</th>
                <th scope="col">Descrição</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody>
              {my_multimeters.map(multimeter => (
                <tr key={multimeter.id}>
                  <th scope="row">{multimeter.id}</th>
                  <td>{multimeter.mult_type}</td>
                  <td>{multimeter.description}</td>
                  <td>

                    <button data-testid="mybtn1" type="button" 
                    className="btn btn-outline-info" style={{margin: '2px'}}
                    onClick={() => updateMultimeter(multimeter.id)}>Editar</button>

                    <button data-testid="mybtn2" type="button"
                    className="btn btn-outline-danger" style={{margin: '2px'}}
                    onClick={() => deleteMultimeter(multimeter.id)}>Excluir</button>

                  </td>
                </tr> 
              ))}            
                     
            </tbody>
        </table>
      </div>
    </div>
  );
}