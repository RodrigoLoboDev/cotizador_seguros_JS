
const Error = ({children}) => {
  return (
    <div className="border border-red-400 text-center bg-red-100 py-3 text-red-700 uppercase font-bold">
        <p>{children}</p>
    </div>
  )
}

export default Error