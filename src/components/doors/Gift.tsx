export default function Gift({size = 100}) {
  return (
    <div style={{
      width: size,
      height: size,
      position: "relative",
      display: "flex",
      justifyContent: "center",
    }}>
      <div style={{
        position: "absolute",
        backgroundColor: "#017d2a",
        width: "90%",
        height: "90%",
      }}/>
    <div style={{
      position: "absolute",
      backgroundColor: "#04a93b",
      width: "100%",
        height: "30%",
    }}/>
    <div style={{
      position: "absolute",
      backgroundColor: "red",
      width: "15%",
        height: "90%",
    }}/>
    <div style={{
      position: "absolute",
      backgroundColor: "red",
      width: "90%",
        height: "15%",
        top: "40%"
    }}/>
    </div>
  );
}