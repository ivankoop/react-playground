
class Counter extends React.Component{
    constructor(props){
        super(props)
        this.state = {count:0}
        //binding is necessary to make `this` point to the correct object
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
      //increments the count of the state
      this.setState((prevState,props) => {
        return {count: prevState.count + 1}
      })
    }
    render(){
        //renders a button that displays the state count
        return <button onClick = {this.clickHandler}>{this.state.count}</button>
    }
}

/*ReactDOM.render(
  <Counter/>,
  document.getElementById("root")
)*/

class Details extends React.Component{
  render(){
    return <h1>{this.props.details}</h1>
  }
}

class Button extends React.Component{
  render(){
    return (
      <button style= {{color: this.props.active? 'red' : 'blue'}} onClick= {() =>
        {this.props.clickHandler(this.props.id,this.props.name)}}>
        {this.props.name}
      </button>
    )
  }
}

class App extends React.Component{

  constructor(props){
    super(props)

    this.state = {activeArray: [0,0,0,0], details: ""}
    this.clickHandler = this.clickHandler.bind(this)

  }

  clickHandler(id,details){
    var arr = [0,0,0,0]
    arr[id] = 1
    this.setState({activeArray: arr, details: details})
    console.log(id,details)
  }

  render(){
    return (
      <div>
        <Button id= {0} active={this.state.activeArray[0]} clickHandler = {this.clickHandler} name="One"/>
        <Button id= {1} active={this.state.activeArray[1]} clickHandler = {this.clickHandler} name="Two"/>
        <Button id= {2} active={this.state.activeArray[2]} clickHandler = {this.clickHandler} name="Three"/>
        <Button id= {3} active={this.state.activeArray[3]} clickHandler = {this.clickHandler} name="Four"/>
        <Details details= {this.state.details}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById("root")
)
