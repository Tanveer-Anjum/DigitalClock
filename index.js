const Clock = document.getElementById("Clock");
setInterval(function(){
    let date= new Date();
    //console.log(date.toLocaleDateString());
  Clock.innerHTML=date.toLocaleTimeString();
},1000)

