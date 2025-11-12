function repeatMessage(message,times){
    setInterval(function(){
        console.log(message);
    },times);
    clearInterval(intervalId)
}
repeatMessage("Practice makes perfect!",3);
