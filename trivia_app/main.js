

var answers = [
  {
    question: "Who created Apple?",
    correct_answer: 0,
    possible_answers: [
      {
        id: 0,
        text: "Steve Jobs",
      },
      {
        id: 1,
        text: "Bill Gates",
      },
      {
        id: 2,
        text: "Steve Wozniack",
      },
      {
        id: 3,
        text: "Mark Zuckerberg"
      },
    ]
  },

  {
    question: "This extension refers usually to what kind of file?",
    correct_answer: 3,
    possible_answers: [
      {
        id: 0,
        text: "Audio File"
      },
      {
        id: 1,
        text: "This extension refers usually to what kind of file?"
      },
      {
        id: 2,
        text: "Image File"
      },
      {
        id: 3,
        text: "TrueType Font"
      },
    ]
  },

  {
    question: "If you checked the time on big ben, in which country would you be?",
    correct_answer: 2,
    possible_answers: [
      {
        id: 0,
        text: "Australia"
      },
      {
        id: 1,
        text: "South Africa"
      },
      {
        id: 2,
        text: "England"
      },
      {
        id: 3,
        text: "France"
      },
    ]
  },

  {
    question: "What is glass mainly made up of?",
    correct_answer: 2,
    possible_answers: [
      {
        id: 0,
        text: "Crystals"
      },
      {
        id: 1,
        text: "Highly compressed water"
      },
      {
        id: 2,
        text: "Sand"
      },
      {
        id: 3,
        text: "Plutonium"
      },
    ]
  },

  {
    question: "Hitler was born in?",
    correct_answer: 3,
    possible_answers: [
      {
        id: 0,
        text: "Poland"
      },
      {
        id: 1,
        text: "Germany"
      },
      {
        id: 2,
        text: "Ukraine"
      },
      {
        id: 3,
        text: "Austria"
      },
    ]
  },

  {
    question: "What is the longest bone in your body?",
    correct_answer: 0,
    possible_answers: [
      {
        id: 0,
        text: "Femur"
      },
      {
        id: 1,
        text: "Tibia"
      },
      {
        id: 2,
        text: "Humerus"
      },
      {
        id: 3,
        text: "Cranium"
      },
    ]
  },

  {
    question: "What is the capital of England?",
    correct_answer: 3,
    possible_answers: [
      {
        id: 0,
        text: "Kent"
      },
      {
        id: 1,
        text: "New York"
      },
      {
        id: 2,
        text: "United Kingdom"
      },
      {
        id: 3,
        text: "London"
      },
    ]
  },

]

var current_question_index = 0;

function QuestionTitle(props) {

  return (
    <h1>{props.question}</h1>
  )

}

function AnswerCorrectText(props) {
  return (
    <h2 className="answer_correct_text">Correct: {props.text}</h2>
  )
}

function AnswerIncorrectText(props) {
  return (
    <h2 className="answer_incorrect_text">Incorrect: {props.text}</h2>
  )
}

function Button(props) {
  return(
    <button onClick= {() => {props.clickHandler(props.id)}} className="button_style">{props.answer_txt}</button>
  )
}

function ButtonsComponent(props) {

  var buttons = [];

  for(let i = 0; i < props.possible_answers.length; i++) {
    buttons.push(<Button answer_txt = {props.possible_answers[i].text} id={props.possible_answers[i].id} clickHandler = {props.clickHandler}/>)
  }

  return (
    <div>
      {buttons}
    </div>
  )
}



class TriviaApp extends React.Component{

    constructor(props){
      super(props)
      this.state = {current_question: answers[current_question_index],correct_answers: 0, incorrect_answers: 0}
      this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(id_selected){

      current_question_index++;

      if(current_question_index == answers.length) {
        current_question_index = 0;
      }

      if(id_selected == this.state.current_question.correct_answer) {

        this.setState((prevState,props) => {
          return {current_question: answers[current_question_index], correct_answers: prevState.correct_answers + 1, incorrect_answers: prevState.incorrect_answers}
        });

      } else {

        this.setState((prevState,props) => {
          return {current_question: answers[current_question_index], correct_answers: prevState.correct_answers, incorrect_answers: prevState.incorrect_answers + 1}
        });
      }

    }
    render(){
      return (
        <div className="main_container">
          <div className="left_container">
            <QuestionTitle question={this.state.current_question.question}/>
            <ButtonsComponent possible_answers={this.state.current_question.possible_answers} clickHandler = {this.clickHandler}/>
          </div>
          <div className="right_container">
            <AnswerCorrectText text={this.state.correct_answers} />
            <AnswerIncorrectText text={this.state.incorrect_answers}/>
          </div>

        </div>
      )
    }
}


ReactDOM.render(
  <TriviaApp/>,
  document.getElementById("root")
)
