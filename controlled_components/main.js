class ControlledInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    render(){
        return (
            <input type = "text" value = {this.state.value} onChange = {this.handleChange}/>
        )
    }
}

class ControlledCheckbox extends React.Component{

    constructor(props){
        super(props)
        this.state = {checked: false}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({checked: event.target.checked})
    }
    render(){
        return (
            <input type = "checkbox" checked = {this.state.checked} onChange = {this.handleChange}/>
        )
    }
}

class ControlledTextArea extends React.Component{

    constructor(props){
        super(props)
        this.state = {value: ''}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    render(){
        return (
            <textarea type = "text" value = {this.state.value} onChange = {this.handleChange}/>
        )
    }
}

class ControlledSelect extends React.Component{

    constructor(props){
        super(props)
        this.state = {value: 'apple'}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({value: event.target.value})
    }
    render(){
        var array = ["apple","banana","carrot","donuts"]
        var options = array.map( (item) =>
            <option value = {item}>{item}</option>
        )
        return (
          <select value={this.state.value} onChange={this.handleChange}>
            {options}
          </select>
        )
    }
}

class ControlledMultiple extends React.Component{

    constructor(props){
        super(props)
        this.state = {value: 'apple'}
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){


        this.setState({[event.target.name]: event.target.value})
    }
    render(){
        var array = ["apple","banana","carrot","donuts"]
        var options = array.map( (item) =>
            <option value = {item}>{item}</option>
        )
        return (
            <form>
                <input name="inputName" type = "input" value = {this.state.inputName} onChange = {this.handleChange}/>
                <textarea name="textAreaName" type = "text" value = {this.state.textAreaName} onChange = {this.handleChange}/>

                <select name = "selectName" value={this.state.selectName} onChange={this.handleChange}>
                    {options}
                </select>
            </form>
        )
    }
}

ReactDOM.render(
  <ControlledMultiple/>,
  document.getElementById("root")
)
