let p = new Promise((resolve, reject) => {
    let a = 1+0;
    if(a===2){
        resolve('sucess');
    }else{
        reject('failed');
    }
})

p.then((value) => {
    console.log(value);
})

p.catch((value) => {
    console.log(value);
});
/**porque o terminal cuspiu essas informações dps de failed ?*/