/* Test Codes */
const promise1  = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('GOT 1')
  }, 1000)
});

const promise2  = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('GOT 2')
  }, 500)
});

// promise1
// .then((data)=> {
//   console.log(data);
// })
// .catch(err => console.error(err))

// Promise.all([promise1, promise2])
//   .then( response => {
// //  console.log(response)
// const [first, second] = response;
// console.log(first, second)
// })
//   .then(console.log(5))


// Promise.race([promise1, promise2])
//   .then(response => {
//     console.log('RESPONSE', response)
//   })


class getLength {

    constructor(size)
    {
      this.length =  size;
    }

    get Length(){
      return this.length;
    }

    set Length (value){
      this.length =  value;
      console.log('Value has been chnaged');
    }
}

var length  =  new getLength(9);

length.Length
