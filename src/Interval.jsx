import React, {useState} from "react";

const Interval = (props) => {

  const [id, setID] = useState(0);
    function clicked() {
      function addZero(i) {
        if (i < 10) {
          i = "0" + i;
        }
        return i;
      }
      function addDoupleZero(i) {
        if (i < 9) {
          i = "00" + i;
        }
        if (i < 99) {
          i = "0" + i;
        }
        return i;
      }

        let d = new Date();
        let x = id;
        let hours = addZero(d.getHours());
        let minutes = addZero(d.getMinutes());
        let seconds = addZero(d.getSeconds());
        let mseconds = addDoupleZero(d.getMilliseconds());
        //Calculate the total time
        x = hours + ":" + minutes + ":" + seconds + ":" + mseconds;
        console.log(x);
        setID(x);

        var dateValue = x;
        var newRow = document.createElement("tr");
        var newCell = document.createElement("td");
        newCell.innerHTML = dateValue;
        newRow.append(newCell);
        document.getElementById("rows").appendChild(newRow);
        document.getElementById("myTable").value = '';
  }

    return <div class="borderStyle">
      <p class="textStyle">W41</p>
      <p><button onClick={clicked}>Interval time</button></p>
      <center><table id="myTable"><tbody id="rows"></tbody></table></center>
      </div>;
  };

export default Interval;