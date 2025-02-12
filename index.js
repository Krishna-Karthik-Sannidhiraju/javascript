function sayHello(){
    console.log("hello,world")
}
sayHello()

function displayWarning(){
    console.log("Warning! System Overload!")
}
displayWarning()

function printStatus(){
    console.log("System Status:Active")
}
printStatus()

function initialie(){
    console.log("Initialiation Complete");
    function shutdown(){
        console.log("System Shutting Down")
    }
    shutdown()
}
initialie()

function endProcess(){
    console.log("Process Ended")
}
function startProcess(){
    console.log("Process Started")
    endProcess();
}
startProcess()

function greetUser(name){
    console.log("Hello" +" "+name)
}

greetUser("karthik")

function calculatesum(a,b){
    sum=a+b;
    return sum;
}
console.log(calculatesum(10,20))

function countDown(){
    for(i=5;i>0;i--){
        console.log(i) 
        
    }
}
countDown();

function checkEvenOdd(n){
    if(n%2==0){
        console.log("the entered number is even");
    }
    else{
        console.log("the number is odd")
    }
}
checkEvenOdd(5);



function endSession(){
    console.log("Session Ended")
}
function beginSession(){
    console.log("Session Started");
    endSession();

}
beginSession();


