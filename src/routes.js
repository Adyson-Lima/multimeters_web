import { BrowserRouter, Routes, Route } from "react-router-dom";
import Multimeters from './pages/Multimeters';
import NewUpdate from './pages/NewUpdate';

export default function MultimetersRouter(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Multimeters/>}/>
        <Route path="/newupdate/:multimeter_id" element={<NewUpdate />} />
      </Routes>
    </BrowserRouter>
  );
}