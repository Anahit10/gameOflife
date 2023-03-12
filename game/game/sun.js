class Sun extends LivingCreature{
    constructor(x,y){
              super(x,y)
              this.energy = 10
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
      let newCell = random(emptyCell)
 
      if (newCell && this.energy > 5) {
          let newX = newCell[0];
          let newY = newCell[1];

          let sun = new Sun(newX, newY);
          matrix[newY][newX] = 6;
        sunArr.push(sun);

          this.energy = 20;
      }
  }


  eat() {
      let emptyCell = this.chooseCell(5);
      let newCell = random(emptyCell)

      if (newCell) {
          this.energy += 6;
          let newX = newCell[0];
          let newY = newCell[1];

         

          for (let i = 0; i <iceArr.length; i++) {
            if (iceArr[i].x == newX && iceArr[i].y == newY) {
               iceArr.splice(i, 1)
                break;
            }
        }



         
          matrix[newY][newX] = 6;
          matrix[this.y][this.x] = 0;

          this.x = newX;
          this.y = newY;

          if (this.energy > 22) {
              this.mul()
          }
      } 
      
      
      
      else {
          this.move()
      }
  }

  move() {
      let emptyCell = this.chooseCell(0);
      let newCell = random(emptyCell)

      if (newCell) {
          let newX = newCell[0];
          let newY = newCell[1];

          matrix[newY][newX] = 6;
          matrix[this.y][this.x] = 0;

         
          this.x = newX;
          this.y = newY;

          this.energy+=5            

          if (this.energy < 0) {
              this.die()
          }
      } 
  }

  die() {
      for (let i = 0; i < sunArr.length; i++) {
          if (sunArr[i].x == this.x && sunArr[i].y == this.y) {
            sunArr.splice(i, 1)
          }
      }
      matrix[this.y][this.x] = 0;


     
  }
}