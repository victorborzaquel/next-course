import Door from "@/components/doors/Door";
import Present from "@/components/doors/Gift";
import DoorModel from "@/models/DoorModel";
import DoorService from "@/services/doorService";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DoorsGame() {
  const query = useRouter()?.query;
  const [doors, setDoors] = useState([] as Array<DoorModel>);

  useEffect(() => {
    const doors = Number(query?.numberOfDoors);
    const gift = Number(query?.hasGift);

    if (doors < gift) {
      alert("O número de portas não pode ser menor que o número do presentes");
      return;
    }

    setDoors(DoorService.createDoors(doors, gift));
  }, [query]);


  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
    }}>
      {doors.map(door => <Door key={door.number} value={door} onChange={newDoor => setDoors(DoorService.updateDoors(doors, newDoor))}/>)}
    </div>
  );
}
