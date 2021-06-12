import React from "react";


export function Pincode(){
  return(
    <div>
      
      <form className="fm">
        <div>
          <label for="fname">Pincode</label>
          <input type="number" id="fname" name="fname" placeholder="Enter your Pincode (Ex. 410210)"/>
        </div>
        <div>
        <p>Age Group</p>
        <div>
            <input type="checkbox" id="lname" name="lname"/>
            <label for="lname">18-44</label>
            <span className="myclass">
              <input type="checkbox" id="lname" name="lname"/>
              <label for="lname">45+</label>
            </span>  
        </div>
        </div>
        <div>
        <p>Dose Type</p>
            <input type="radio" id="lname" name="lname"/>
            <label for="lname">Dose 1</label>
            <span className="myclass">
              <input type="radio" id="lname" name="lname"/>
              <label for="lname">Dose 2</label>
            </span>
        </div>
        <div>
        <p>Fee</p>
        <div>
            <input type="checkbox" id="lname" name="lname"/>
            <label for="lname">Free</label>
            <span className="myclass">
              <input type="checkbox" id="lname" name="lname"/>
              <label for="lname">Paid</label>
            </span>  
        </div>
        </div>
      </form>
        <input type="submit" value="Find Available Slots"/>
    </div>
  
  )
}
export default Pincode