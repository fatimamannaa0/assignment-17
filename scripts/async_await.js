const getPromise = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done");
        }, 3000);
    });
}

const getPromiseResult = async()=>{
    console.log("first line");
    
    try{
        const result = await getPromise();
        console.log(result);
    }catch (error){
        console.log(error);
    }

    console.log("last line")
}

getPromiseResult();