
type proptypes = {
    result: string | undefined
}


function Result(props:proptypes) {
  return (
    <p className="mb-4">{props.result}</p>
  )
}

export default Result