const getPromiseOne = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promise 1 Done");
        }, 1000);
    })
}

const getPromiseTwo = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promise 2 Done");
        }, 2000);
    })
}

const getPromiseThree = () =>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            reject("Promise 3 Error");
        }, 3000);
    })
}



const getPromisesAll = () => {
    Promise.all([getPromiseOne(),getPromiseTwo(),getPromiseThree()])
        .then(([result_1,result_2,result_3])=>{
            console.log(result_1);
            console.log(result_2);
            console.log(result_3);
        })

        .catch((error)=>{
            console.log(error);
        })

        .finally(()=>{
            console.log("getPromisesAll called");
            console.log("----promises all----");
        })

}

const getPromisesAllSettled = () => {
    Promise.allSettled([getPromiseOne(),getPromiseTwo(),getPromiseThree()])
        .then(([result_1,result_2,result_3])=>{
            console.log(result_1);
            console.log(result_2);
            console.log(result_3);
        })

        .catch((error)=>{
            console.log(error);
        })

        .finally(()=>{
            console.log("getPromisesAllSettled called");
            console.log("----promises all settled----");
        })

}


const getPromisesRace = () => {
    Promise.race([getPromiseOne(),getPromiseTwo(),getPromiseThree()])
        .then((result)=>{
            console.log(result);
        })

        .catch((error)=>{
            console.log(error);
        })

        .finally(()=>{
            console.log("getPromisesRace called");
            console.log("----promises race----");
        })

}

getPromisesAll();
getPromisesAllSettled();
getPromisesRace();