const anotherFunction = () =>{
    return new Promise((resolve, reject) =>{
        if (false) {
            resolve('Hey !!')
        }else{
            reject('Upsss :c')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log('err: ' + err))
    .finally(() => console.log('Finally'))