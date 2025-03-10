//1. function Order(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("order Recieved")
//         },1000);
//     });
// }
// function preparingfood(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve("preparing food")

//         },3000);
//     });
// }
// function packingfood(){
//     return new Promise((resolve)=>{
//         setTimeout(() =>{
//             resolve("food is packed")

//         },2000);

//     })
// }
// function assigning(){
//     return new Promise((resolve)=>{
//         setTimeout(() =>{
//             resolve("Assigning a delievery person")

//         },2000);

//     })
// }
// function delievered(){
//     return new Promise((resolve)=>{
//         setTimeout(() =>{
//             resolve("food is delievered")

//         },4000);

//     });
// }

// Order()
//   .then(res => {console.log(res); return preparingfood()})
//   .then(prepres => {console.log(prepres); return packingfood()} )
//   .then(pack => {console.log(pack); return assigning()})
//   .then(assign =>{console.log(assign);return delievered()})
//   .then(del=> console.log(del))


// 2.function bookingseats(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve("please select the seats")
        
//         },2000)
//     })
// }
// function proceessing(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve("payment is being processed")
        
//         },3000)
//     })
// }
// function generating(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve("generating tickets")
        
//         },1000)
//     })
// }
// function email(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() =>{
//             resolve("Sending conformation email")
        
//         },2000)
//     })
// }

// bookingseats()
//   .then(res=>{console.log(res); return proceessing()})
//   .then(process=> {console.log(process); return generating()})
//   .then(gen=> {console.log(gen); return email()})
//   .then(resemai=> console.log(resemai))


// 3.
// function Checkin(){
//    return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Check-in")
//     },1000)
//    })
// }
// function OilChange(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Oil Change")
//      },2000)
//     })
// }
// function EngineCheck(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Engine check")
//      },3000)
//     })
// }
// function carwash(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Car-wash")
//      },2000)
//     })
// }
// function check(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Finally check-in")
//      },2000)
//     })
// }
// Checkin()
//   .then(res => {console.log(res); return OilChange()})
//   .then(oil=>{console.log(oil); return EngineCheck()})
//   .then(engine=>{console.log(engine);return carwash()})
//   .then(carwash=>{console.log(carwash); return check()})
//   .then(check=>console.log(check))
 
4.
// function Laptop(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Diagnosing issue")
//      },3000)
//     })
// }
// function Replacing(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Replacing faulty parts")
//      },4000)
//     })
// }
// function Updating(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Updating software")
//      },2000)
//     })
// }
// function Final(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Final testing")
//      },2000)
//     })
// }
// function Returning(){
//     return new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          resolve("Returning to customer")
//      },1000)
//     })
// }
// Laptop()
//   .then(res => {console.log(res); return Replacing()})
//   .then(oil=>{console.log(oil); return Updating()})
//   .then(engine=>{console.log(engine);return Final()})
//   .then(carwash=>{console.log(carwash); return Returning()})
//   .then(car=>console.log(car))
  
5.

function Online(){
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("Checking course availability")
         },1000)
        })
}
function processing(){
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("Processing payment ")
         },3000)
        })
}
function Updating(){
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("Generating enrollment ID")
         },1000)
        })
}
function Course(){
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve(" Sending course materials")
         },2000)
        })
}
function granting(){
        return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve("Granting access to live classes")
         },1000)
        })
}
Online()
 .then(res=>{console.log(res);return processing() })
 .then(res1=>{console.log(res1);return Updating() })
 .then(res2=>{console.log(res2);return Course() })
 .then(res3=>{console.log(res3);return granting() })
  .then(res4=>console.log(res4))
 


