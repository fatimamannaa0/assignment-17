// Because async code allows other codes to run without waiting until others finsh 

console.log("line 1");

const timeout_result = setTimeout (()=> {
    console.log("line 2");
},2000);

console.log("line 3")