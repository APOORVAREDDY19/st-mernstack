function greet(name,back){
    console.log("hello"+name);
        back(); 
}
greet("apoorva",function(){
    console.log("how are you?");
});