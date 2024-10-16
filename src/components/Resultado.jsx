import { useMemo, useCallback, useRef } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, PLANES } from '../constants';

const Resultado = () => {

    const { resultado, datos } = useCotizador()
    const { year, marca, plan } = datos
    // console.log(datos);

    if (resultado === 0) {
        return null
    }

    const marcaSeleccionada = useCallback(MARCAS.filter(m => m.id === Number(marca)), [resultado])
    // console.log(marcaSeleccionada[0].nombre);

    const planSeleccionado = useMemo( () => PLANES.filter(p => p.id === Number(plan)), [resultado])
    // console.log(planSeleccionado[0].nombre);

    const yearRef = useRef(year)

  return (
    <div className='bg-gray-100 text-center mt-5 p-5 shadow-sm'>
        <h2 className='text-gray-600 font-black text-3xl'>
            Resumen
        </h2>

        <p className='my-2'>
            <span className='font-bold'>Marca: </span>
            {marcaSeleccionada[0].nombre}
        </p>

        <p className='my-2'>
            <span className='font-bold'>Plan: </span>
            {planSeleccionado[0].nombre}
        </p>

        <p className='my-2'>
            <span className='font-bold'>Año: </span>
            {yearRef.current}
        </p>

        <p className='my-2 text-xl'>
            <span className='font-bold'>Total a Pagar: </span>
            {resultado}
        </p>
    </div>
  )
}

export default Resultado