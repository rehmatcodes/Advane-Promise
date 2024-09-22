const promiseOne = new Promise((resolve, reject) => {
    // Do An Async here 
    // DB calls  Cryptography 
    setTimeout( function(){
        console.log('Asyunc Task is Completed ');    
        resolve()
    },1000)
  });

  promiseOne.then(function(){
    console.log('Promise Consuned')
  })
  


  new promise = (function(resolve,reject){
    setTimeout(function(){
        console.log('Async Task 2')
        resolve()
    }, 1000)
  }).then(function(){
    console.log('Async 2 resolved')
  })

  const promisethree = new promise(function(resolve,reject){
    setTimeout( function(){
     resolve({username:'Rehmat', email:'rehmat"gmail.com'})
    }, 1000)
  })

promisethree.then(function(user){
    console.log('user')
})



const promisefour = new promise(function(resolve,reject){
    setTimeout( function(){
        let error = true    //false
        if(!error){
            resolve({username:'Musarat' , password:'123'})
        }else{
            reject('ERROR: went wrong ')
        }
    }, 1000)
})

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })

  .then((username) => {
    console.log(username);
  })
  .catch(function(error) {
    console.log(error);
  })
  .finally(() => {
    console.log('The Promise is either resolved or rejected');
  });

  const promiseFive = new promise(function(resolve,reject){
    setTimeout( function(){
        let error = true    //false
        if(!error){
            resolve({username:'Zahra' , password:'231'})
        }else{
            reject('ERROR: went wrong Due To The Zahara ')
        }
    }, 1000)
  })

  async function consumepromisefive (){
    try {
        const response =   await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
  }
  consumepromisefive()

  async function  getallusers(){
   try {
    const response = await  fetch('https://reactjs.org/')
    const data =  await  response.json()
   } catch (error) {
    console.log('E:', error );
    
   }
    console.log(data);
  }

  getallusers()


  fetch('https://reactjs.org/')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data);
    
  })
  .catch((error) => console.log(error) )
