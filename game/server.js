
var express = require('express')
var app = express();
app.use(express.static("."))
app.get("/", function (req, res ){
    res.redirect("index.html")
})
app.listen(3000,function(){
    console.log("Example is running on port 3000")

})

var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));
app.get('/', function (req, res) {
res.redirect('index.html');
});

server.listen(3001);

function matrixGenerator(matrixSize, grass, grassEater, predator, jur,ice,sun) {
    var matrix = []

    for (let i = 0; i < matrixSize; i++) {
        matrix.push([])
        for (let j = 0; j < matrixSize; j++) {
            matrix[i].push(0)

        }
    }


    for (let i = 0; i < grass; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 1

    }

    for (let i = 0; i < grassEater; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 2

    }



    for (let i = 0; i < predator; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 3


    }



    for (let i = 0; i < jur; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 4


    }


    for (let i = 0; i < ice; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 5


    }



    for (let i = 0; i < sun; i++) {

        var x = Math.floor(Math.random() * matrixSize)
        var y = Math.floor(Math.random() * matrixSize)

        matrix[y][x] = 6


    }

    io.sockets.emit('send matrix', matrix)
    return matrix
}

matrix = matrixGenerator(10, 10, 10, 5, 10, 16, 10 )

grassArr = []
grassEaterArr = []
predatorArr = []
jurArr = []
 iceArr = []
 sunArr = []

var n = 100


 weath = "winter";
 let Grass = require("./Grass")
 let GrassEater = require("./GrassEater")
 let Predator = require("./Predator")
 let Jur = require("./Jur")
 let Ice = require("./Ice")
 let Sun = require("./Sun")

function rand(min, max) {
    return Math.random() * (max - min) + min;
  }

for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        matrix[i][j] = Math.floor(rand(0, 3))
        
    }  
}

io.sockets.emit('send matrix', matrix)


function CreateMatrix(m, n) {
    for (let i = 0; i < m; i++) {
      matrix.push([]);
      for (let j = 0; j < n; j++) {
        matrix[i].push(0);
      }
    }


}
CreateMatrix(80, 64);
function AddCharacter(character, count) {
    for (let i = 0; i < count; i++) {
      let x = Math.floor(Math.random() * matrix[0].length);
      let y = Math.floor(Math.random() * matrix.length);
      matrix[y][x] = character;
    }
}  

  AddCharacter(1, 100);
  AddCharacter(2, 35);
  AddCharacter(3, 150);
  AddCharacter(4, 100);
  AddCharacter(1, 35);
  AddCharacter(2, 150);



  io.sockets.emit('send matrix', matrix)




// let Grass = require("./Grass")
// let GrassEater = require("./GrassEater")
// let Predator = require("./Predator")
// let Jur = require("./Jur")
// let Ice = require("./Ice")
// let Sun = require("./Sun")
function createObj(){
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
    
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y)
                grassArr.push(gr)
            } else if (matrix[y][x] == 2) {
                var grEat = new GrassEater(x, y)
                grassEaterArr.push(grEat)
            } else if (matrix[y][x] == 3) {
                var pred = new Predator(x, y)
                predatorArr.push(pred)
            } else if (matrix[y][x] == 4) {
                var jur = new Jur(x, y)
                jurArr.push(jur)
            
            } else if (matrix[y][x] == 5) {
                // console.log('a')
                var ice = new Ice(x, y)
                iceArr.push(ice)
            
            } else if (matrix[y][x] == 6) {
                var sun = new Sun(x, y)
                sunArr.push(sun)
        }
    }
    
    }
    io.emit("send matrix",matrix)

}



console.log(matrix);

function kill() {
    grassArr = [];
    grassEaterArr = [];
    predator = [];
    jurArr = [];
    iceArr = []
    sunArr = []
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            matrix[y][x] = 0;
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addGrass() {
    for (var i = 0; i < 5; i++) {
        console.log(matrix);
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y, 1)
            grassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addGrassEater() {
    for (var i = 0; i < 5; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x, y, 2))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addPredator() {
    for (var i = 0; i < 5; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
            var pr = new Predator(x, y, 3)
            predator.push(pr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}
    function addJur() {
        for (var i = 0; i < 5; i++) {
        var x = Math.floor(Math.random() * matrix[0].length)
        var y = Math.floor(Math.random() * matrix.length)
            if (matrix[y][x] == 0) {
                matrix[y][x] = 4
                var ju = new Jur(x, y, 4)
                jurArr.push(ju)
            }
        }
        io.sockets.emit("send matrix", matrix);
}

function addIce() {
    for (var i = 0; i < 5; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 5
            var ic = new Ice(x, y, 5)
            iceArr.push(ic)
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addSun() {
    for (var i = 0; i < 5; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 6
            var sn = new Sun(x, y, 6)
            sunArr.push(sn)
        }
    }
    io.sockets.emit("send matrix", matrix);
}



function gameMove(){

    for (let i in grassArr) {
        grassArr[i].mul()
    }
    
    for (let i in grassEaterArr) {
        grassEaterArr[i].eat()
    
    }
    
    for (let i in predatorArr) {
        predatorArr[i].eat()
    
    }
    for (let i in jurArr) {
        jurArr[i].move()
    
    }
    
    
    for (let i in iceArr) {
        iceArr[i].eat()
    
    }
    
    for (let i in sunArr) {
        sunArr[i].eat()
    
    }
    
    io.emit("send matrix",matrix)

}

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);

io.on('connection', function (socket) {
    createObj();
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
    socket.on("add Predator", addPredator);
    socket.on("add sun", addSun);
    socket.on("add jur", addJur);
    socket.on("add ice", addIce);


});

var statistics = {}; 

setInterval(function() {
   
    statistics.Grass = grassArr.length;
    statistics.GrassEater = grassEaterArr.length;
    statistics.Predator = predatorArr.length;
    statistics.Sun = sunArr.length;
    statistics.Jur = jurArr.length;
    statistics.Ice = iceArr.length;
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},1000)


setInterval(gameMove,500)

