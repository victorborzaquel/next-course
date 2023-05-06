import { Component } from "react"

export default class Classe extends Component {
  render = () => (
      <div>
        <h1>Classe</h1>
        <Counter number={30} />
      </div>
    )
}

class Counter extends Component {
  state = {
    count: 0
  }

  props = {
    number: 0
  }

  constructor(props: any) {
    super(props)
    this.props = props
  }

  componentDidMount = () => {
    this.setState({ count: this.props.number })
  }

  handleClick = () => {
    this.setState({ count: this.state.count + 1 })
  }

  render = () => (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.handleClick}>Add</button>
      </div>
  )
}