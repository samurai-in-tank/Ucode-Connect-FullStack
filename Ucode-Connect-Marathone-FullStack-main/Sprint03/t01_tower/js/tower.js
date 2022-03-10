class Building{
  constructor(Floors, Material, Adress) {
    this.Floors = Floors;
    this.Material = Material;
    this.Adress = Adress;
  }

  hasElevator(elevator){
    this.hasElevator = elevator;
  }

  arcCapacity(apacity){
    this.apacity = apacity;
  }

  height(height_tower){
    this.height_tower = height_tower;
  }
}

class Tower  extends Building {
  getFloorHeight(){
    let floor_heiht = height_tower/Floors;
  }
}
