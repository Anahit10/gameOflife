class Jur extends LivingCreature{
    constructor(x,y){
        super(x,y)
              this.energy = 18
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
 
      if (newCell) {
          let newX = newCell[0];
          let newY = newCell[1];

          let jur = new Jur(newX, newY);
          matrix[newY][newX] = 4;
        jurArr.push(jur);

          this.energy = 18;
      }
  }




  move() {
      let emptyCell = this.chooseCell(0);
      let newCell = random(emptyCell)

      if (newCell) {
          let newX = newCell[0];
          let newY = newCell[1];

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
      for (let i = 0; i < jurArr.length; i++) {
          if (jurArr[i].x == this.x && jurArr[i].y == this.y) {
            jurArr.splice(i, 1)
          }
      }
      matrix[this.y][this.x] = 0;
  }
}