
import './App.css';
import {useState} from 'react';



function App() {

const [weight, setWeight] = useState(0);
const [bottles, setBottles] = useState(1);
const [time, setTime] = useState(1);
const [alkometer, setAlkometer] = useState(0);
const [gender, setGender] =useState("male");

function alcLevel(e) {
 e.preventDefault()
 let liters = bottles * 0.33;
 let grams = liters * 8 * 4.5;
 let burning = weight / 10;
 let gramsleft = grams - (burning - time);
 let bloodalc = 0;


 if (gender === "male") {
   
  bloodalc = gramsleft / (weight * 0.7)
 } else {
   bloodalc = gramsleft / (weight * 0.6)
 }

 if (bloodalc < 0) {
   bloodalc = 0
 }

 setAlkometer(bloodalc)


}


  return (
    <form onSubmit={alcLevel}>
    <h3>Calculating alcohol blood level</h3>
    <div>
    <label>Weight</label>
    <input type="weight" step="1" value={weight} onChange={e => setWeight(e.target.value)}></input>
    </div>

    <div>
    <label>Bottles</label>
    <select type="bottles" value={bottles} onChange={e => setBottles(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>

    </select>
    </div>

    <div> 
      <label>Time</label>
      <select type="time" step="1" value={time} onChange={e => setTime(e.target.value)}>
      <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>

    </select>
      
    </div>

    <div> 
      <label>Gender</label>
      <input type="radio" name="gender" value="male" defaultChecked onChange={e => setGender(e.target.value)}/>
      <label>Male</label>
      <input type="radio" name="gender" value="female" onChange={e => setGender(e.target.value)}/>
      <label>Female</label>
    </div>

    <div> 
        <output>{alkometer.toFixed(2)}</output>
      </div>

    <div>
    <button>Calculate</button>

    </div>
  </form>

  );
}

export default App;
