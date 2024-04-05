// import Student from '../practice/Student.jsx'

// function App() {
// return(
// <>
// <Student name="SpongeBob" age={30} isStudent={true}/>
// <Student name="Patrick" age={35} isStudent={false}/>
// <Student />
// </>
// );
// }

// export default App
// //app.jsx

// import PropTypes from 'prop-types'

// function Student(props){
// return(
// <div className="studentDiv">
// <p>Name: {props.name}</p>
// <p>Age: {props.age}</p>
// <p>Student: {props.isStudent ? "Yes" : "No"}</p>
// </div>
// );
// }

// Student.propTypes = {
// name: PropTypes.string,
// age: PropTypes.number,
// isStudent: PropTypes.bool,
// }

// Student.defaultProps = {
// name: "Guest",
// age: 0,
// isStudent: false,
// }
// export default Student

// APP FILE RENDERING OBJECT
import List from './List.jsx'
function App() {

const fruits = [{id: 1, name: "apple", calories: "apple"},
{id: 2, name: "banana", calories: 159},
{id: 3, name: "orange", calories: 76},
{id: 4, name: "coconut", calories: 365}];

const vegies = [{id: 1, name: "mushroom", calories: 100},
{id: 2, name: "banana", calories: 159},
{id: 3, name: "orange", calories: 76},
{id: 4, name: "coconut", calories: 365}];
return(
<>
<List items = {fruits} category="Fruits"></List>
<List items = {vegies} category="Vegies"></List>
</>
);
}

export default App

//THE LIST.JSX FILE
import PropTypes from 'prop-types'

function List(props){

const category = props.category;
const itemList = props.items;
// fruits.sort((a,b) => a.name.localeCompare(b.name))
// fruits.sort((a,b) => a.calories - b.calories);

// const lowCalorieFruits = fruits.filter(fruit => fruit.calories > 100);

const listFruits = itemList.map(item => <li key={item.id}>
{item.name}: <b>{item.calories}</b>

</li>);
return(
<>
<h3>{category}</h3>
<ul>{listFruits}</ul>
</>
); }

List.propTypes = {
category : PropTypes.string,
items : PropTypes.arrayOf(PropTypes.shape( {id : PropTypes.number,
name: PropTypes.string,
calories: PropTypes.number})),
}

List.defaultProps = {
category:"Category",
}

export default List

//BUTTON

function Button(){

const handleClick = (event) => event.target.textContent = "ouch 🤕";
return (
<button onDoubleClick={(event) => handleClick(event)}>Click Me 😊</button>
);
}

export default Button

//USESTATE
import React, {useState} from "react";

function MyComponent(){

const [name, setName] = useState("guest");

function HandleChange(event){
setName(event.target.value);
}

const [shipping, setDelivery] = useState("Delivery");

function HandleRadio(event){
setDelivery(event.target.value);
}

return(

<div>
<input value={name} onChange={HandleChange}/>
<p>Name : {name}</p>

      <input type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={HandleRadio}/>Delivery
      <input type="radio" value="Pick-up" checked={shipping === "Pick-up"} onChange={HandleRadio}/>Delivery
      <p>Shipping : {shipping}</p>


    </div>

);
}

export default MyComponent

//input picture onclick event

function ProfilePicture(){
const imageSrc = './src/assets/junBw.png';

const handleClick = (event) => event.target.style.display ="none";
return(
<img onClick={(event => handleClick(event))} src={imageSrc} className="imgPic"></img>
);
}

export default ProfilePicture

//user of onchange
import React,{useState} from "react";

function MyComponent(){

const [car, setCar] = useState({year:2024,
make: "Ford",
model: "mustang"});

function handleYearChange(event){
setCar(prevCar => ({...prevCar, year: event.target.value}));
}

function handleMakeChange(event){
setCar(prevCar => ({...prevCar, make: event.target.value}))
}

function handleModelChange(event){
setCar(prevCar => ({...prevCar, model: event.target.value}))
}

return(<>

  <div>
    <p>Your fav car is : {car.model} {car.year} {car.make}</p>
  
    <input type="number" value={car.year} onChange={handleYearChange}/>
    <input type="text" value={car.make} onChange={handleMakeChange}/>
    <input type="text" value={car.model} onChange={handleModelChange}/>
  
  
  </div>
 
  </>);
}

export default MyComponent

//adding in li and removing

import React, { useState } from 'react';

function MyComponent(){
const [foods, setFoods] = useState(["Apple","Banana","Coconut"]);

function handleAddFood(){
const newFoods = document.getElementById("foodInput").value;

    document.getElementById("foodInput").value = "";
    setFoods(prevFoods => [...prevFoods, newFoods]);

}

function handleRemoveFood(index){
setFoods(foods.filter((\_,i) => i !== index));
}

return (

      <div>
        <h1>List of Foods</h1>




          <ul>
            {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
          </ul>
          <input type="text" id="foodInput" placeholder='Enter A food'/>
          <button onClick={handleAddFood}>add food</button>
      </div>

);
}

export default MyComponent

//ADD AND REMOVE CARS

import React, { useState } from 'react';

function MyComponent(){

const [cars, setCars] = useState([]);
const [carYear, setYear] = useState(new Date().getFullYear());
const [carMake, setCarMake] = useState("");
const [carModel, setCarModel] = useState("");

function handleCarChange(event){
const newCar = {
year: carYear,
make: carMake,
model: carModel,
}

    setCars(prevCars => [...prevCars, newCar]);

}

function handleYearChange(event){
setYear(event.target.value);
}

function handleMakeChange(event){
setCarMake(event.target.value);
}

function handleModelChange(event){
setCarModel(event.target.value);
}

function handleRemoveCar(index){
setCars(prevCars => prevCars.filter((\_,i) => i !== index));
}

return (

    <div>
      <h1>LIST OF CARS</h1>
      <ul>
        {cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}>
          {car.year} {car.make} {car.model}
        </li> )}
      </ul>

    <input type="number" onChange={handleYearChange} value={carYear}/><br />
    <input type="text" onChange={handleMakeChange} placeholder='enter Make'/><br />
    <input type="text" onChange={handleModelChange} placeholder='enter model'/><br />
    <button onClick={handleCarChange}>ADD CAR</button>
    </div>
    );

}
export default MyComponent
