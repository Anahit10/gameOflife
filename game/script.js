
// function matrixGenerator(matrixSize, grass, grassEater, predator, jur,ice,sun) {
//     var matrix = []

//     for (let i = 0; i < matrixSize; i++) {
//         matrix.push([])
//         for (let j = 0; j < matrixSize; j++) {
//             matrix[i].push(0)

//         }
//     }


//     for (let i = 0; i < grass; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 1

//     }

//     for (let i = 0; i < grassEater; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 2

//     }



//     for (let i = 0; i < predator; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 3


//     }



//     for (let i = 0; i < jur; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 4


//     }


//     for (let i = 0; i < ice; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 5


//     }



//     for (let i = 0; i < sun; i++) {

//         var x = Math.floor(Math.random() * matrixSize)
//         var y = Math.floor(Math.random() * matrixSize)

//         matrix[y][x] = 6


//     }






     



//     return matrix
// }

// var matrix = matrixGenerator(30, 40, 15, 5, 12, 16, 10 )
var side = 25
//

// `var grassArr = []
// var grassEaterArr = []
// var predatorArr = []
// var jurArr = []
// var iceArr = []
// var sunArr = []

var socket = io();
var side = 12;
var weath = 'summer';

function setup() {
    createCanvas(80 * side, 64 * side);
   }
   
socket.on("weather", function (data) {
    weath = data;
})



function setup() {
    frameRate(15)

    createCanvas(30 * side, 30 * side)


}




function changeColor(matrix) {

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
var tbot= side-side*0.1
textSize(tbot)

            if (matrix[y][x] == 1) {
                fill("green")
                rect(x * side, y * side, side, side)
                text("🌿",x * side,y * side+tbot)
            } else if (matrix[y][x] == 2) {
                fill("orange")
                rect(x * side, y * side, side, side)
                text("🐴",x * side,y * side+tbot)
            } else if (matrix[y][x] == 3) {
                fill("red")
                rect(x * side, y * side, side, side)
                text("🐙",x * side,y * side+tbot)
            } else if (matrix[y][x] == 4) {
                fill("blue")
                rect(x * side, y * side, side, side)
                text("🌊",x * side,y * side+tbot)
            } else if (matrix[y][x] == 5) {
                fill("white")
                rect(x * side, y * side, side, side)
                text("❄️",x * side,y * side+tbot)
            } else if (matrix[y][x] == 6) {
                fill("yellow")
                rect(x * side, y * side, side, side)
                text("🌞",x * side,y * side+tbot)
            } else {
                fill("gray")
                rect(x * side, y * side, side, side)
            }
            
        }

    }

    // for (let i in grassArr) {
    //     grassArr[i].mul()
    // }

    // for (let i in grassEaterArr) {
    //     grassEaterArr[i].eat()

    // }

    // for (let i in predatorArr) {
    //     predatorArr[i].eat()

    // }
    // for (let i in jurArr) {
    //     jurArr[i].move()

    // }
    

    // for (let i in iceArr) {
    //     iceArr[i].eat()

    // }

    // for (let i in sunArr) {
    //     sunArr[i].eat()

    // }
    
}
    

socket.on("send matrix", changeColor)


function kill() {
    socket.emit("kill")
  }
  
  function addGrass() {
    socket.emit("add grass")
  }
  
  function addGrassEater() {
    socket.emit("add grassEater")
  }
  
  function addPredator() {
    socket.emit("add predator")
  }

  function addSun() {
    socket.emit("add sun")
  }
  function addJur() {
    socket.emit("add jur")
  }

  function addIce() {
    socket.emit("add ice")
  }
