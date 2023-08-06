type proptypes = {
    onChange: Function
    value: string | undefined
}

function Input(props:proptypes) {

    const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
        props.onChange(event.target?.value);        
    }



  return (
    <input className="p-[5px] m-[30px] border-2 border-gray-700 w-40 h-8"required type="number" value={props.value} placeholder="Ingresa tu número" onChange={(event) => inputChange(event)} ></input>
  )
}

export default Input