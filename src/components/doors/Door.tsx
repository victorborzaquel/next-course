import DoorModel from "@/models/DoorModel";
import Gift from "./Gift";

interface DoorProps {
  value: DoorModel;
  onChange(newDoor: DoorModel): void;
  size?: number;
}

export default function Door({ size = 300, value, onChange }: DoorProps) {
  const { number, hasGift, opened, selected } = value;

  function handleSelect() {
    onChange(value.toggleSelection());
  }

  function handleOpen() {
    onChange(value.open());
  }

  return (
    <div data-content style={{
        height: size,
        width: size / 1.3,
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginLeft: "1%",
        marginRight: "1%",
      }}>
      <div data-door onClick={handleSelect} style={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }} >
        <div data-background style={{
          height: size,
          width: size / 1.5,
          backgroundColor: "#5a5a5a",
          position: "absolute",
          display: opened ? "block" : "none",
        }} />


        <div data-background style={{
          height: size,
          width: size / 1.5,
          backgroundColor: "#ee7214",
          position: "absolute",
          display: opened ? "none" : "block",
        }} />

        <div data-border style={{
          height: size,
          width: size / 1.5,
          borderColor: selected ? "#cbeb55" : "#ee2a14",
          borderWidth: 7,
          borderStyle: "solid",
          borderBottom: "none",
          position: "absolute",
        }} />

        <div data-number style={{
          fontWeight: "bold",
          color: selected ? "#cbeb55" : "#ffffff",
          fontSize: size / 7,
          position: "absolute",
          top: "10%",
          display: opened ? "none" : "block",
        }}>
          {number}
        </div>
      </div>

      <div data-gift style={{
        display: hasGift && opened ? "block" : "none",
        position: "absolute",
        bottom: 0
      }}>
        <Gift size={size / 2.5} />
      </div>

      <div data-floor style={{
        height: "5%",
        width: "100%",
        position: "absolute",
        backgroundColor: "white",
        bottom: 0,
      }} />

      <div data-button onClick={handleOpen} style={{
        height: size / 10,
        width: size / 10,
        borderRadius: "50%",
        backgroundColor: selected ? "#cbeb55" : "#ee2a14",
        position: "absolute",
        bottom: "50%",
        left: "20%",
        display: opened ? "none" : "block",
      }} />

    </div>
  )
}