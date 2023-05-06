
import MenuButton from "@/components/doors/MenuButton";
import Link from "next/link";
import { useState } from "react";

export default function Doors() {
  const [numberOfDoors, setNumberOfDoors] = useState(3)
  const [doorHasGift, setDoorHasGift] = useState(2)

  const size = 400;
  const buttonSize = size / 2;

  return (
    <div>
      <h1>Doors</h1>
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gridTemplateRows: "repeat(2, 1fr)",
      gap: "1%",
      width: size,
      height: size,
    }}>
    <MenuButton size={buttonSize}>
      <h1>Doors<br/>Game</h1>
    </MenuButton> 

    <MenuButton size={buttonSize}>
      <h1>Doors<br/>Game</h1>
    </MenuButton>

    <MenuButton size={buttonSize}>
      <h1>Doors<br/>Game</h1>
    </MenuButton>

    <MenuButton size={buttonSize}>
    <Link href={`/projects/doors/${numberOfDoors}/${doorHasGift}`} passHref style={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "bold",
    }}>
        <h1>START</h1>
      </Link>
    </MenuButton>
    
    </div>
      
    </div>
  );
}