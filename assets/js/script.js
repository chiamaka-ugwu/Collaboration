// alert("Hello world")

// console.log("Hello dear")

// var x = "Chiamaka"

// console.log(x)
// console.log(x)
// console.log(x)
// console.log(x)
// console.log(x)

// VARIABLES
// var number1 = 57
// var number2 = 70
// var sum = number1 + number2
// console.log(sum)

// IF ELSE STATEMENTS
// var number1 = 12
// var number2 = 467

// if(number1>number2){
//     console.log("number1 is greater than number2")
//     console.log(number1 + " is greater than " + number2)
// }
// else{
//     console.log("condition is false")
//     console.log(number2 + " is greater than " + number1)  
// }

// ELSE IF STATEMENTS
// var number = 4
// if(number == 1){
//     console.log("You entered " + number)
// }else if(number == 2){
//     console.log("You entered " + number)
// }else if(number == 3){
//     console.log("You entered " + number)
// }else if(number == 4){
//     console.log("You entered " + number)
// }else if(number == 5){
//     console.log("You entered " + number)
// }

// NESTED IF ELSE STATEMENTS
// var score = 100
// var classroom = "SS2"

// if(score >= 100 && classroom == "SS2"){        logical operator "or" ||
//     console.log("You are qualified")
    
//     // if(classroom == "SS2"){
//     //     console.log("You are qualified")
//     // }else{
//     //     console.log("You have to be in SS2")
//     // }
// }else{
//     console.log("You are not allowed")
// }

// var number1 = 10
// var number2 = 20
// var number3 = 30

// if (number1 > number2 && number1 > number3){
//         console.log(number1 + " is the greatest ")
//     }else if(number2 > number1 && number2 > number3){
//         console.log(number2 + " is the greatest ")
//     }else if(number3 > number1 && number3 > number2){
//         console.log(number3 + " is the greatest ")
//     }



    // DOM MANIPULATIONS
    // var logo = document.getElementById("logo")
    // console.log(logo)

    // var box = document.getElementsByClassName("box")
    // console.log(box)

    // var p = document.getElementsByTagName("p")[1]
    // p.style.color = 'red'

    // p.addEventListener("click", function(){
    //     p.style.color = 'red'
    // })

    // p.addEventListener("mouseover",function(){
    //     p.style.color = 'blue'
    // })


    var menuIcon = document.getElementById("menu-icon")
    var dropDown = document.getElementById("dropdown")
    
    var getStartedOpen = document.getElementById("get-started-open")
    var getStartedClose = document.getElementById("get-started-close")
    var modalBackground = document.getElementById("modal-background")

    var open = false

    menuIcon.addEventListener("click", function(){
        if(open == false){
            dropDown.style.display = "block"
            open = true
        }
        else{
            dropDown.style.display = "none"
            open = false
        }
    })

    getStartedOpen.addEventListener("click", function(){
        modalBackground.style.display = "flex"
    })

    getStartedClose.addEventListener("click", function(){
        modalBackground.style.display = "none"
    })



    AOS.init();




