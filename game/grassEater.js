
let GrassEater = require("./GrassEater")
let LivingCreature = require("./LivingCreature")
module.exports = class GrassEater extends LivingCreature{
    constructor(x, y) {
        super(x,y)
        this.energy = 10;
        this.directions = [];
    }

    //բազմանալ
    mul() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]
  
        if (newCell && this.energy > 5) {
            let newX = newCell[0];
            let newY = newCell[1];

            let grEat = new GrassEater(newX, newY);
            matrix[newY][newX] = 2;
            grassEaterArr.push(grEat);

            this.energy = 10;
        }
    }


//ուտել
    eat() {
        let emptyCell = this.chooseCell(1);
        let newCell = emptyCell[Math.floor(Math.random()*emptyCell.length)]

        if (newCell) {
            this.energy += 5;
            let newX = newCell[0];
            let newY = newCell[1];

            for (let i = 0; i < grassArr.length; i++) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                    break;
                }
            }

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

            this.x = newX;
            this.y = newY;

            if (this.energy > 12) {
                this.mul()
            }
        else {
            this.move()
        }
    }
}


    //քայլել
    move() {
        let emptyCell = this.chooseCell(0);
        let newCell =  emptyCell[Math.floor(Math.random()*emptyCell.length)]
        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 2;
            matrix[this.y][this.x] = 0;

           
            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        } else{
            this.energy--
        }
    }


    die() {
        for (let i = 0; i < grassEaterArr.length; i++) {
            if (grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y) {
                grassEaterArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }

}