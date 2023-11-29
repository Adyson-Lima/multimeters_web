import { Link, useNavigate, useParams } from "react-router-dom";
import React, {useState, useEffect} from "react";
import api from "../../services/api";

export default function NewUpdate(){

  const [mult_type, setMultType] = useState('');
  const [description, setDescription] = useState('');

  const navigate = useNavigate();

   // O nome multimeter_id, é o mesmo definido na rota
  const {multimeter_id} = useParams();

  // CREATE/UPDATE, cria ou atualiza multimeter na api
  async function saveOrUpdate(e){

    e.preventDefault();

    const data = {mult_type, description};

    if(multimeter_id === '0'){
      try {
        await api.post('api/v1/multimeters', data, {});
        navigate('/');
      } catch (error) {
        alert("erro ao salvar!");        
      }
    }else{
      try {
        await api.patch(`api/v1/multimeters/${multimeter_id}`, data, {});
        navigate('/');
      } catch (error) {
        alert('Erro ao atualizar!');        
      }
    }
  }

  // Carrega um registro específico da api, e seta dados para update
  async function loadMultimeter(){
    try {
      const response = await api.get(`/api/v1/multimeters/${multimeter_id}`,{});
      setMultType(response.data.mult_type);
      setDescription(response.data.description);
    } catch (error) {
      alert('Erro ao carregar dados da api!');
      navigate('/');      
    }
  }

  // Chama loadMultimeter() para preencher dados no form
  useEffect(() => {
    if(multimeter_id === '0'){
      return;
    }else{
      loadMultimeter();
    }
  },[multimeter_id]);

  return(
    <div data-testid="mycard" className="card border-primary" style={{marginTop: '20px'}} >
      <div className="card-header bg-primary" style={{color: '#fff'}}>
        Multimeters Crud
      </div>
      <div className="card-body">

        <Link data-testid="mylink" className="btn btn-dark" 
        style={{marginBottom: '5px'}} to="/">Home</Link>

        <form data-testid="myform" onSubmit={saveOrUpdate}>

          <div className="form-group">
            <label htmlFor="mult_type">Tipo</label>
            <input data-testid="input1" id="mult_type" type="text" style={{marginBottom: '20px'}} 
            className="form-control" placeholder="Modelo"
            value={mult_type}
            onChange={e => setMultType(e.target.value)}></input>
          </div>

          <div className="form-group">
            <label htmlFor="description">Descrição</label>
            <input data-testid="input2" id="description" type="text" style={{marginBottom: '20px'}}
            className="form-control" placeholder="Descrição"
            value={description}
            onChange={e => setDescription(e.target.value)}></input>
          </div>

          <button data-testid="btnenviar" 
          type="submit" className="btn btn-primary">Enviar</button>

        </form>

      </div>
    </div>
  );
}