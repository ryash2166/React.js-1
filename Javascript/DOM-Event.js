function OnClick(){
    document.getElementById("demo").innerHTML = "Javascript Events!";
    document.getElementById("demo").style.backgroundColor = "green"
  }
  
  function OnClick1(){
    document.getElementById("demo").innerHTML = "Javascript Events!";
    document.getElementById("demo").style.backgroundColor = "red"
  }  

  function OnClick2(){
    document.getElementById("demo").innerHTML = "Javascript Events!";
    document.getElementById("demo").style.backgroundColor = "yellow"
  }  

  function OnClick3(){
    document.getElementById("demo").innerHTML = "Javascript Events!";
    document.getElementById("demo").style.backgroundColor = "pink"
  }  
  /* Add EventLiseners */
  
  document.getElementById("head").addEventListener("mouseout" ,greet)
  
  function greet(){
    document.getElementById("head").style.color = "orange"
  }

  