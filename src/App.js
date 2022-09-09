import "./App.css";
import {useState} from "react";

function App() {
  var userdate;
  var date;
  const [statofuserdate,setStatofuserdate] = useState("");
  const [outputarray, setOutputarray] = useState(""); // output display is named as oparray. its not an array
  const [footer,setFooter] = useState("Note: Your data will not be stored for privacy reasons.");
  var search="";

  // for some reason there's a delay  in useState. dsiplay only for 2ndrender onwards.
  var newPalindromedate1 = "";
  var countforcalc=0;
  //methods
  

  function worker(){
    userdate=document.getElementById("userdate").value; // get date input

   date = userdate.split(""); // converting date to array;

  for (var i=0;i<date.length;i++){ // removing "-" in date 
    if(date[i]=="-"){
      date.splice(i,1);
    }
  }

  //console.log(date);
  
  var yyyy = date.slice(0,4);
  var mm = date.slice(4,6);        
  var dd = date.slice(6,8);       
  date = dd.concat(mm,yyyy);    // getting date in dd mm yyyy format bcoz yyyy dd mm is default format
   //console.log(date);          
  
  var joineddate = date.join(""); // bcoz join() does not affect original array
  //console.log(joineddate);    

// to compare with == we need strings.. we cant do this with arrays date and reversearray
  var reversearray = date;  
  reversearray.reverse(); // getting reversearray
  var joinedreversedate = reversearray.join("");  // bcoz join() does not affect original array

  //console.log(joinedreversedate);    
  console.log(joineddate,joinedreversedate);// joineddate and joinedreverseddate are strings
  if(joineddate===joinedreversedate){
    console.log("palindrome");
    setStatofuserdate("Hurray! It's a palindrome");
    
    //console.log(statofuserdate);

  }
  else
    {
      search="";
      countforcalc=0;
      while(search!="done"){
  {
    console.log("not a palindrome"); 
     setStatofuserdate("Sorry this is not a palindrome. ");
   // console.log(statofuserdate);
    // if not palindrome the next palindrome algo will e showed.. 

    //to check if next date is palindrome is or not.. and if not keep incremnting date
    var datestring= dd.join("");
    var monthstring = mm.join("");
    var yearstring= yyyy.join("");

    var dateint = parseInt(datestring);
    var monthint = parseInt(monthstring);
    var yearint = parseInt(yearstring);

    const monthdays = [31,28,31,30,31,30,31,31,30,31,30,31] // days in each month
    if(yearint%4==0){
      monthdays[1]=29;  // if its a leap year rb has 29 days
    }
    
    // incrementing date start

    switch(monthint-1){

      /*case 1:if((dateint==monthdays[monthint-1])){
        dateint=1;
        monthint++;
        break;
      }
      
      else{
        dateint++;
        break;
      }*/

      case 11:if(dateint==monthdays[monthint-1]){
        dateint=1;
        monthint=1;
        yearint=yearint+1;
        break;
      }
      else{
        dateint++;
        break;
      }

      default: if(dateint==monthdays[monthint-1]){
        dateint=1;
        monthint++;
        break;
      }
      else{
        dateint++;
        break;
      }
      

    }
        // incrementing date end

        // converting incremented dates to strings to checked with incremented reverse dates
    datestring = dateint.toString();
    if(datestring.length==1){
      datestring = "0"+datestring;
    }
    monthstring = monthint.toString();
    if(monthstring.length==1){
      monthstring = "0"+monthstring;
    }
    yearstring = yearint.toString();

    joineddate = datestring+monthstring+yearstring;// joineddate is a string
    console.log(joineddate);
    reversearray=[];
    reversearray=joineddate.split(""); //revarray  has all digits of new date as elements as array
    reversearray=reversearray.reverse();//new joineddate(incremented date) is reversed now
    joinedreversedate= reversearray;// reversearray is kept with reversed digits of inc date just like that
    joinedreversedate= reversearray.join("");// incremneted date has been reversed
    console.log(joinedreversedate);

    if(joineddate===joinedreversedate){
      console.log("palindrome");
     
      search="done";

      var ddforjoiningHiphen = joineddate.slice(0,2);  // these 3 lines for adding "/" after dd and mm in the output
      var mmforjoiningHiphen = joineddate.slice(2,4);  
      var yyyyforjoiningHiphen = joineddate.slice(4,8);

      joineddate = ddforjoiningHiphen+"/"+mmforjoiningHiphen+"/"+yyyyforjoiningHiphen;
      var StringforoutputPurpose = joineddate;

      setOutputarray(`The nearest palindrome in future is ${StringforoutputPurpose}. You missed it by ${countforcalc} days`)
      //console.log(statofuserdate);
      setFooter("Note: Your data has not been stored for privacy reasons.");

  
    }
    else{console.log("not a palindrome"); 
       //setNewpalindromeDate("no not a palindrome");
       newPalindromedate1 = "no not a palindrome";
       dd=datestring.split("");
       mm=monthstring.split("");
       yyyy=yearstring.split("");
       countforcalc++;
       console.log(countforcalc);
  }

}

}
}
  
  

  }
  return (
    <div className="App">
      <div className="parentContainer">
      <h2><span className="texthighlight">Let's find out if your birthday is a palindrome or not!</span></h2>
      <div className="justonce">Enter your birthday:</div>
      <div><input type="date" placeholder="select a date" id="userdate"></input></div>
      <div><button type="submit" onClick={worker}>Check</button></div>
      {/*<div className="output">{statofuserdate}</div>*/}
      {/*<div>{countfordisplay}</div>*/}
      <div className="output">{statofuserdate}{outputarray}</div>
      <footer><div id="footer">{footer}</div></footer>
      
      </div>
    </div>
  );
}

export default App;
