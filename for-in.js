const person ={
    name:'ajay',
    age:24,
    sex:'male'
}; 

for(let key in person){
    console.log(key + ":" +person[key])
}
// Result =>
// name:ajay
// age:24
// sex:male

let colours=["red","green","black","orange","brown"]
for(let key in colours){
    // console.log(key);
     console.log(colours[key]);
    
}

// Result =>
// red
// green
// black
// orange
// brown    