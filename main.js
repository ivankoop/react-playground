
function TransportationTitle(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.subtitle}</p>
    </div>

  )
}

function CheckboxComponent(props) {
  return (
    <div>
      {props.title} <input type="checkbox" id={props.id} name={props.title} value={props.title}></input>
    </div>
  )
}

function SelectComponent(props) {
  return (
    <div>
      {props.title}
      <select>
        <option value={props.items[0]}>{props.items[0]}</option>
        <option value={props.items[1]}>{props.items[1]}</option>
        <option value={props.items[2]}>{props.items[2]}</option>
        <option value={props.items[3]}>{props.items[3]}</option>
      </select>
    </div>
  )
}

function CarTableComponent(props) {
  if(props.item.active == true) {
    return (
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Model</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
          <tr>
            <th>{props.item.year}</th>
            <th>{props.item.model}</th>
            <th>{props.item.price}</th>
            <th><button>Buy now</button></th>
          </tr>
        </tbody>
      </table>
    )
  }

  return null;


}

function CarsListComponent(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <ul><CarTableComponent item={props.items[0]}/></ul>
      <ul><CarTableComponent item={props.items[1]}/></ul>
      <ul><CarTableComponent item={props.items[2]}/></ul>
      <ul><CarTableComponent item={props.items[3]}/></ul>
    </div>
  )
}

function TransportationOptions(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <CheckboxComponent title="New Only" id="1"/>
      <br></br>
      <SelectComponent title="Select Type" items={["All", "Cars", "Trucks", "Convertibles"]}/>
      <CarsListComponent title="Cars" items= {[
        {year: 2013, model: "A", price: "$32000", active: true},
        {year: 2011, model: "B", price: "	$4400", active: true},
        {year: 2016, model: "B", price: "	$15500", active: true},
        {year: 2016, model: "B", price: "	$15500", active: false},
      ]}/>
      <CarsListComponent title="Trucks" items= {[
        {year: 2014, model: "D", price: "$18000", active: true},
        {year: 2013, model: "E", price: "	$5200", active: true},
        {year: 2016, model: "B", price: "	$15500", active: false},
        {year: 2016, model: "B", price: "	$15500", active: false},
      ]}/>
      <CarsListComponent title="Convertibles" items= {[
        {year: 2009, model: "F", price: "$2000", active: true},
        {year: 2010, model: "G", price: "	$6000", active: true},
        {year: 2012, model: "B", price: "	$12500", active: true},
        {year: 2017, model: "M", price: "	$50000", active: true},
      ]}/>
    </div>
  )
}

function TransportationMain(props) {
  return (
    <div>
      <TransportationTitle title="Welcome to React Transportation" subtitle="The best place to buy vehicles online"/>
      <TransportationOptions title="Choose Options"/>
    </div>
  )
}


ReactDOM.render(
  <TransportationMain/>,
  document.getElementById("root")
)
