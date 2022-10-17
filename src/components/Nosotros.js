import React, {useState, useEffect} from 'react';


const Nosotros = () => {

   

    const [equipo, setEquipo] = useState([])

    
    useEffect (() => {

        console.log('useEffect')
        obtenerDatos()

    }, [])

    const obtenerDatos = async () => {
       const data= await fetch ('https://jsonplaceholder.typicode.com/users')
        const users= await data.json()
        setEquipo(users)
        //console.log(users)
    }

    return ( 
        <div>
            
            <h1>Esta es la pagina de nosotros</h1>
                        
        <ul>
            {

                    equipo.map(item =>(

                        <li key={item.id}>{item.name}-{item.email}</li>
                    ))
            }

        </ul>

       </div>

     );
}
 
export default Nosotros;