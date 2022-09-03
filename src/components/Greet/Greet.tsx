type GreetProps = {
    name?: string
}

const Greet = (props: GreetProps) => {
  return (
    <div>Harrrooo {props.name}</div>
  )
}

export default Greet