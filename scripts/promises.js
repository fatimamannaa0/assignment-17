const getDataFromServer = (condition) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (condition) {
                resolve("Done");
            }else {
                reject("Error");
            }
        },2000);
    });

}

const promise = getDataFromServer(true);

promise 

.then((result)=>{
    console.log(result)
})

.catch((error)=>{
    console.log(error)
})

.finally(()=>{
    console.log("promise called")
});