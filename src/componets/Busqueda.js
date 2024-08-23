import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";


function Busqueda(props){

    const[busqueda, setBusqueda] = useState('');


    return(<div>
        <div className="input-group p-2">
          
          <input className="form-control" type="text" 
          placeholder="Que desea escuchar?"
          onChange={(e)=>{
            setBusqueda(e.target.value);
          }}/>
          <button className="btn btn-outline-primary" >
            Buscar
          </button>
          {
            (busqueda.length>0 )
            &&(<div className='text-end text-info'>
              Usted quiere Escuchar{busqueda}
              </div>)
          }
      </div>   







    </div>



    )


}

export default Busqueda