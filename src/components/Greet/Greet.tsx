import { GreetProps } from "./Greet.types"

const Greet = (props: GreetProps) => {
  return (
    <div>Harrrooo {props.name}</div>
  )
}

export default Greet