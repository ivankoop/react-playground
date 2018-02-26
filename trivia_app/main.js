

function QuestionTitle(props) {

  return (
    <h1>What is 8 x 1?</h1>
  )

}

function AnswerCorrectText(props) {
  return (
    <h2 className="answer_correct_text">Correct: 2</h2>
  )
}

function AnswerIncorrectText(props) {
  return (
    <h2 className="answer_incorrect_text">Incorrect: 5</h2>
  )
}

function Button(props) {
  return(
    <button className="button_style">hola hehe</button>
  )
}

class ButtonsComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Button/>
        <Button/>
        <Button/>
        <Button/>
      </div>
    )
  }

}


class TriviaApp extends React.Component{

    constructor(props){
      super(props)
    }

    this.clickHandler = this.clickHandler.bind(this)

    clickHandler(){
      console.log("click en boton");
    }

    render(){
      return (
        <div className="main_container">
          <div className="left_container">
            <QuestionTitle/>
            <ButtonsComponent clickHandler = {this.clickHandler}/>
          </div>
          <div className="right_container">
            <AnswerCorrectText />
            <AnswerIncorrectText/>
          </div>

        </div>
      )
    }
}


ReactDOM.render(
  <TriviaApp/>,
  document.getElementById("root")
)
