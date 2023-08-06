type proptypes = {
    buttonText: string
    onClickFunction: Function
}

function Button(props:proptypes) {
  return (
   <button className='bg-[#4caf50] py-2.5  px-5 text-white w-25 h-9 text-xs'onClick={()=>props.onClickFunction()}>{props.buttonText}</button>
  )
}

Button.propTypes = {
}

export default Button
