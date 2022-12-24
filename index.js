// learning about console.log
// let count = 0
// console.log(count)

// create a variable myage and assign your age value to it
// let myage = 20
// console.log(myage)


// second task mathematical operations
// let Myage = 20
// let humandogratio = 7
// let mydogage = Myage*humandogratio
// console.log(mydogage)


// Third task reassigning and incrementing
// let bonuspoints = 50
// bonuspoints = bonuspoints + 100
// console.log(bonuspoints)
// bonuspoints = bonuspoints - 25
// console.log(bonuspoints)
// bonuspoints = bonuspoints + 70
// console.log(bonuspoints)


// Fourth task creating functions
// function firstfunc(){
//     console.log(42)
// }
// firstfunc()


// Fifth task sum up function
// let lap1 = 34
// let lap2 = 33
// let lap3 = 36
// function lapsadder(){
//     console.log(lap1+lap2+lap3)
// }
// lapsadder()


// Sixth task increment function
// let lapscompleted = 0
// function totallaps(){
//     lapscompleted = lapscompleted + 1
//     console.log(lapscompleted)
// }
// totallaps()
// totallaps()
// totallaps()

// Back to the main project
let count = 0
let countEl = document.getElementById("count-el")
// console.log(countEl)
function increment(){
    count +=1
    countEl.textContent = count   
}
// let saveEL = document.getElementById("save-btn")
let saveEL = document.getElementById("save-el")
function save(){
    let str = count + " - "
    saveEL.textContent+=str// textcontent displays all the hidden elements which innnertext wont
    countEl.textContent=0
    count = 0 //count must be 0 too restart
    
}

// lets learn about strings
// let message = "You have three new notifications"
// // console.log(message)
// let username = "per"
// let messagetouser = message + " " + username + "!"
// console.log(messagetouser)

// creating a greeting variable 
// let name = "Nehal"
// let greeting = "Hi, my name is "
// let mygreeting = greeting + name
// console.log(mygreeting)

// Strings v numbers
// strings always wins i.e numbers are converted into strings in challenge between them
// console.log(4+5)
// console.log("2"+"4")
// console.log("5"+1)
// console.log(100+"100")

// Creating a welcome message
// let welcomeEl = document.getElementById("welcome-el")
// let name1 = "Nehal"
// let greeting = "Hi, my name is "
// welcomeEl.innerText = greeting + name1
// welcomeEl.innerText += "👋"

// Project is finally completed 

// Lets do some practice
// let firstname = "Nehal"
// let lastname = "Ali"
// let fullname = firstname +" "+ lastname
// console.log(fullname)
// console.log("gerald")

// practicing funcctions
// let name = "Linda"
// let greeting="Hi there"
// function greet(){
//     console.log(greeting + ", " + name + "!")
// }
// greet()

// incrementing and decrementing practice
// let points = 3
// function add3points(){
//     points += 3
// }
// function removepoints(){
//     points -= 1
// }
// add3points()
// add3points()
// add3points()
// removepoints()
// removepoints()
// console.log(points)

// strings vs numbers
// trying to predict the output
// console.log("2"+2)  // output "22"
// console.log(11+7) // output 18
// console.log(6 + "5") // output "65"
// console.log("My points: " + 5 + 9)  // output mypoints: "59"  strings win
// console.log(2+2) // 4
// console.log("11" + "14")// "1114"

function error(){
    let x = document.getElementById("errormessage")
    x.textContent = "Something went wrong, Please try again"
}

let num1 = 4
let num2 = 5
let result = document.getElementById("result-el")
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

function add(){
    let x = num1 + num2
    result.textContent = "RESULT:" + " " + x 
}

function sub(){
    let x = num1 - num2
    result.textContent = "RESULT:" + " " + x 
}

function prod(){
    let x = num1 * num2
    result.textContent = "RESULT:" + " " + x 
}

function division(){
    let x = num1 / num2
    result.textContent = "RESULT:" + " " + x 
}

// Allhamdulillah first project completed with the muscle memory