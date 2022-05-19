setInterval(function(){
    var currentTime=new Date();
    var hours=currentTime.getHours();
    var minute=currentTime.getMinutes();
    var second=currentTime.getSeconds();
    console.log(hours +"/"+ minute + "/" +second);
});
document.getElementById("hours")