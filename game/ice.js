
let LivingCreature = require("./LivingCreature")
module.exports = class Ice extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 35

        this.directions = []
    }


    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(char) {
        this.getNewCoordinates();
        let found = [];

        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if (y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0) {
                if (matrix[y][x] == char) {
                    found.push(this.directions[i]);
                }
            }




        }

        return found;
    }


    mul() {
        let emptyCell = this.chooseCell(0);

        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell && this.energy > 4) {

            let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

            if (newCell && this.energy > 36) {
                let newX = newCell[0];
                let newY = newCell[1];

                let ice = new Ice(newX, newY);
                matrix[newY][newX] = 5;
                iceArr.push(ice);

                this.energy = 19;

                matrix[newY][newX] = 4;
                iceArr.push(ice);

                this.energy = 29;

            }
        }
    }

    eat() {
        let emptyCell = this.chooseCell(4);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]


        if (newCell) {
            this.energy += 5;



            if (newCell) {
                this.energy += 2;

                let newX = newCell[0];
                let newY = newCell[1];



                for (let i = 0; i < jurArr.length; i++) {
                    if (jurArr[i].x == newX && jurArr[i].y == newY) {
                        jurArr.splice(i, 1)
                        break;
                    }
                }





                matrix[newY][newX] = 5;

                matrix[newY][newX] = 4;

                matrix[this.y][this.x] = 0;

                this.x = newX;
                this.y = newY;

                if (this.energy > 22) {

                    if (this.energy > 19) {

                        this.mul()
                    }
                }



                else {
                    this.move()
                }
            }
        }

    }

    move() {
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCell[Math.floor(Math.random() * emptyCell.length)]

        if (newCell) {
            let newX = newCell[0];
            let newY = newCell[1];

            matrix[newY][newX] = 5;

            matrix[newY][newX] = 4;

            matrix[this.y][this.x] = 0;


            this.x = newX;
            this.y = newY;

            this.energy--

            if (this.energy < 0) {
                this.die()
            }
        }
    }

    die() {
        for (let i = 0; i < iceArr.length; i++) {
            if (iceArr[i].x == this.x && iceArr[i].y == this.y) {
                iceArr.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0;
    }
}