
function NameField(props) {

  var label_style = {
    margin: 0
  }

  var input_style = {
    height: "25px",
    width: "150px"
  }

  return (
    <div>
      <p style= {label_style}>First Name</p>
      <input style= {input_style} type="text"/>
    </div>
  )
}

function LastNameField(props) {

}




ReactDOM.render(
  <NameField/>,
  document.getElementById("root")
)
