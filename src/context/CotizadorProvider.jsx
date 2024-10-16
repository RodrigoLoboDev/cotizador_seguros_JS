import { obtenerDiferenciaYear, incremetoMarca, incrementoPlan, formatearDinero } from '../helpers'

import { createContext, useState } from 'react' // con esta funcion creamos un context
// una recomendacion es que el provider y context tengan el mismo nombre de inicio: CotizadorProvider - CotizadorContext

const CotizadorContext = createContext()

// El provider va a ser el lugar donde vas a definir tu state, puedes tener algunos effect, tambien puesdes crear funciones. Provider es donde nace o de donde vienen los datos
const CotizadorProvider = ({children}) => {

   const [datos, useDatos] = useState({
    marca: '',
    year: '',
    plan: ''
   })
   const [error, setError] = useState('')
   const [resultado, setResultado] = useState(0)
   const [cargando, setCargando] = useState(false)

   const handleChangeDatos = e => {
    useDatos({
        ...datos,
        [e.target.name]: e.target.value
    }) 
   }

   const CotizarSeguro = () => {
    // console.log('Cotizando...', datos);

    // Una base = 2000
    let base = 2000
    // Obtener diferencia de años
    const diferenciaYear = obtenerDiferenciaYear(datos.year)
    // console.log(diferenciaYear);
    // Hay que restar el 3% por cada año
    base -= (base * (diferenciaYear * 3)) / 100
    // console.log(base);  
    // Incrementar: Americano = 15%
    // Europeo = 30%
    // Asiatico = 5%
    base *= incremetoMarca(datos.marca)
    // console.log(base);
    // Incrementar: Basico = 20%
    // Completo = 50%
    base *= incrementoPlan(datos.plan)
    // console.log(base);

    // Formatear Dinero
    base = formatearDinero(base)

    setCargando(true)

    setTimeout(() => {
        setCargando(false)
        setResultado(base)
    }, 3000);    
   }
    
    return (
        <CotizadorContext.Provider
            value={{
                datos,
                handleChangeDatos,
                error,
                setError,
                CotizarSeguro,
                resultado,
                setResultado,
                cargando
            }}
        >
            {children}
        </CotizadorContext.Provider>
    )
}

export {
    CotizadorProvider
}
export default CotizadorContext