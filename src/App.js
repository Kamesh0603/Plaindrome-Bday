import "./App.css";
import {useState} from "react";

function App() {
  var userdate;
  var date="";
  var date1="";
  const [statofuserdate,setStatofuserdate] = useState("");
  const [outputarray, setOutputarray] = useState(""); // output display is named as oparray. its not an array
  const [footer,setFooter] = useState("Note: Your data will not be stored for privacy reasons.");
  var search="";
  var search1="";

  // for some reason there's a delay  in useState. dsiplay only for 2ndrender onwards.
  var newPalindromedate1 = "";
  var countforcalc=0;
  var countforcalc1=0;
  var outputarraypast="";
  var outputarrayfuture="";

  //methods
  function futureandpast(){
    userdate=document.getElementById("userdate").value; // get date input
  
    if (userdate==""){
    setOutputarray("Please select a date :)"); // if user gives empty input then display error and break
    return
  };
//if input is not empty then continue with below code
    worker();
    pastcheck();
    if(countforcalc1<countforcalc){
      setOutputarray(outputarraypast);
    }
    else{setOutputarray(outputarrayfuture);}
  }

//####################################

function pastcheck(){
  userdate=document.getElementById("userdate").value; // get date input  
 date1 = userdate.split(""); // converting date to array;

for (var i=0;i<date1.length;i++){ // removing "-" in date 
  if(date1[i]=="-"){
    date1.splice(i,1);
  }
}

//console.log(date);

var yyyy1 = date1.slice(0,4);
var mm1 = date1.slice(4,6);        
var dd1 = date1.slice(6,8);       
date1 = dd1.concat(mm1,yyyy1);    // getting date in dd mm yyyy format bcoz yyyy dd mm is default format
 //console.log(date);          

var joineddate1 = date1.join(""); // bcoz join() does not affect original array
//console.log(joineddate);    

// to compare with == we need strings.. we cant do this with arrays date and reversearray
var reversearray1 = date1;  
reversearray1.reverse(); // getting reversearray
var joinedreversedate1 = reversearray1.join("");  // bcoz join() does not affect original array

//console.log(joinedreversedate);    
console.log(joineddate1,joinedreversedate1);// joineddate and joinedreverseddate are strings
if(joineddate1===joinedreversedate1){
  console.log("palindromee");
  setStatofuserdate("Hurray! It's a palindrome");
  
  //console.log(statofuserdate);

}
else
  {
    search1="";
    countforcalc1=1;
    while(search1!="done"){
{
  console.log("not a palindrome"); 
   setStatofuserdate("Sorry this is not a palindrome. ");
 // console.log(statofuserdate);
  // if not palindrome the next palindrome algo will e showed.. 

  //to check if next date is palindrome is or not.. and if not keep incremnting date
  var datestring1= dd1.join("");
  var monthstring1 = mm1.join("");
  var yearstring1= yyyy1.join("");

  var dateint1 = parseInt(datestring1);
  var monthint1 = parseInt(monthstring1);
  var yearint1 = parseInt(yearstring1);

  const monthdays1 = [31,28,31,30,31,30,31,31,30,31,30,31] // days in each month
  if(yearint1%4==0){
    monthdays1[1]=29;  // if its a leap year rb has 29 days
  }
  
  // incrementing date start

  switch(monthint1-1){

    /*case 1:if((dateint==monthdays[monthint-1])){
      dateint=1;
      monthint++;
      break;
    }
    
    else{
      dateint++;
      break;
    }*/

    case 0:if(dateint1==1){
      dateint1=31;
      monthint1=12;
      yearint1=yearint1-1;
      break;
    }
    else{
      dateint1--;
      break;
    }

    default: if(dateint1==1){
      dateint1=monthdays1[monthint1-2];
      monthint1--;
      break;
    }
    else{
      dateint1--;
      break;
    }
    

  }
      // decrementing date end

      // converting decremented dates to strings to be checked with decremented reverse dates
  datestring1 = dateint1.toString();
  if(datestring1.length==1){
    datestring1 = "0"+datestring1;
  }
  monthstring1 = monthint1.toString();
  if(monthstring1.length==1){
    monthstring1 = "0"+monthstring1;
  }
  yearstring1 = yearint1.toString();

  joineddate1 = datestring1+monthstring1+yearstring1;// joineddate is a string
  console.log(joineddate1);
  reversearray1=[];
  reversearray1=joineddate1.split(""); //revarray  has all digits of new date as elements as array
  reversearray1=reversearray1.reverse();//new joineddate(incremented date) is reversed now
  joinedreversedate1= reversearray1;// reversearray is kept with reversed digits of inc date just like that
  joinedreversedate1= reversearray1.join("");// incremneted date has been reversed
  console.log(joinedreversedate1);

  if(joineddate1===joinedreversedate1){
    console.log("palindromee");
   
    search1="done";

    var ddforjoiningHiphen1 = joineddate1.slice(0,2);  // these 3 lines for adding "/" after dd and mm in the output
    var mmforjoiningHiphen1 = joineddate1.slice(2,4);  
    var yyyyforjoiningHiphen1 = joineddate1.slice(4,8);

    joineddate1 = ddforjoiningHiphen1+"/"+mmforjoiningHiphen1+"/"+yyyyforjoiningHiphen1;
    var StringforoutputPurpose1 = joineddate1;

    outputarraypast = `The nearest palindrome in past was ${StringforoutputPurpose1}. You missed it by ${countforcalc1} days`;
    //console.log(statofuserdate);
    setFooter("Note: Your data has not been stored for privacy reasons.");
    return(countforcalc1);


  }
  else{console.log("not a palindrome"); 
     
     dd1=datestring1.split("");
     mm1=monthstring1.split("");
     yyyy1=yearstring1.split("");
     countforcalc1++;
     console.log(countforcalc1);
}

}

}
}

}




//#####################################



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
    console.log("palindromee");
    setStatofuserdate("Hurray! It's a palindrome");
    
    //console.log(statofuserdate);

  }
  else
    {
      search="";
      countforcalc=1;
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
      console.log("palindromee");
     
      search="done";

      var ddforjoiningHiphen = joineddate.slice(0,2);  // these 3 lines for adding "/" after dd and mm in the output
      var mmforjoiningHiphen = joineddate.slice(2,4);  
      var yyyyforjoiningHiphen = joineddate.slice(4,8);

      joineddate = ddforjoiningHiphen+"/"+mmforjoiningHiphen+"/"+yyyyforjoiningHiphen;
      var StringforoutputPurpose = joineddate;

      outputarrayfuture = `The nearest palindrome in future is ${StringforoutputPurpose}. You can wait for ${countforcalc} days`;
      //console.log(statofuserdate);
      setFooter("Note: Your data has not been stored for privacy reasons.");
      return(countforcalc);
  
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
      <div><button type="submit" onClick={futureandpast}>Check</button></div>
      {/*<div className="output">{statofuserdate}</div>*/}
      {/*<div>{countfordisplay}</div>*/}
      <div className="output">{statofuserdate}{outputarray}</div>
      <footer><div id="footer">{footer}</div></footer>
      <div className="note">**The calculation will be done only on DD/MM/YYYY format**</div>
      
      </div>
    </div>
  );
}

export default App;
