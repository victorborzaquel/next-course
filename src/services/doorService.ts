import DoorModel from "@/models/DoorModel";

export default class DoorService {
  public static createDoors(quantity: number, selected: number): DoorModel[] {
    return Array.from({ length: quantity }, (_, i) => {
      const number = i + 1;
      const hasGift = number === selected;
      return DoorModel.builder(number).hasGift(hasGift).build();
    });
  }

  public static updateDoors(doors: DoorModel[], updatedDoor: DoorModel): DoorModel[] {
    return doors.map(currentDoor => {
      const sameAsUpdated = currentDoor.number === updatedDoor.number;

      if (sameAsUpdated) {
        return updatedDoor;
      }

      return updatedDoor.opened ? currentDoor : currentDoor.unselect();
    });
  }
}
