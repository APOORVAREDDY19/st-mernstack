function cookRice(hey){
    console.log("cooking rice...");
    setTimeout(function(){
        console.log("rice ready!");
        hey()
    },4000)
    
    
}
cookRice(function(){
      console.log("eating now");
});
