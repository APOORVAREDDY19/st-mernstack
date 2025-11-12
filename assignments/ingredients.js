function makeJuice(fruit1,fruit2,liquid){
    let juice=fruit1;
    juice=juice+"+"+fruit2;
    juice=juice+"+"+liquid;
    console.log("juice is made of " + juice);
}
makeJuice("Apple","Banana","Milk");