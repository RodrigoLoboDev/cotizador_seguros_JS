import { Fragment } from 'react'
import useCotizador from '../hooks/useCotizador'
import { MARCAS, YEARS, PLANES } from '../constants';
import Error from './Error';

const Formulario = () => {

  const { datos, handleChangeDatos, error, setError, CotizarSeguro } = useCotizador()
  // console.log(datos);


  const handleSubmit = e => {
    e.preventDefault()

    if (Object.values(datos).includes('')) {
      setError('Todos los campos son obligatorios');
      return;
    }

    setError('')

    CotizarSeguro()    
  }

  return (
    <>
        {error && (
          <Error>{error}</Error>
        )}
        <form
          onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label htmlFor="marca" className="block mb-3 font-bold text-gray-400 uppercase">Marca</label>
                <select 
                  onChange={e => handleChangeDatos(e)}
                  // value={datos.marca}
                  name="marca" 
                  id="marca"
                  className="w-full p-3 bg-white border border-gray-200"
                >
                  <option value="">-- Seleccione una Marca --</option>
                  {MARCAS.map(marca => (
                    <option
                      key={marca.id} 
                      value={marca.id}
                    >
                      {marca.nombre}
                    </option>
                  ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">Año</label>
                <select 
                  onChange={e => handleChangeDatos(e)}
                  // value={datos.year}
                  name="year" 
                  id="year"
                  className="w-full p-3 bg-white border border-gray-200"
                >
                  <option value="">-- Seleccione un Año --</option>
                  {YEARS.map(year => (
                    <option
                      key={year} 
                      value={year}
                    >
                      {year}
                    </option>
                  ))}
                </select>
            </div>

            <div className="my-5">
                <label htmlFor="year" className="block mb-3 font-bold text-gray-400 uppercase">Seleccione un Plan</label>
                <div className='flex gap-3 items-center'>
                  {PLANES.map(plan => (
                    <Fragment key={plan.id}>
                      <label htmlFor="plan">{plan.nombre}</label>
                      <input 
                        onChange={e => handleChangeDatos(e)}
                        type="radio"
                        name='plan'
                        value={plan.id} 
                      />
                    </Fragment>
                  ))}
                </div>
            </div>

            <input 
              type="submit"
              className='w-full bg-indigo-500 hover:bg-indigo-600 transition-all text-white uppercase cursor-pointer py-3 text-center font-bold text-xl rounded-lg'
              value="Cotizar"
            />
        </form>
    </>
  )
}

export default Formulario