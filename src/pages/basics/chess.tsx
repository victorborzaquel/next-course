export default function chess() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: "gray",
    }}>
      <Board size={500} />
    </div>
  )
}

const Board = ({size}: {size: number}) => {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      width: size,
      height: size,
    }}>
      {Array(64).fill(0).map((_, i) => <Square key={i} position={i} size={size / 8} isBlack={(Math.floor(i / 8) + i) % 2 === 0} />)}
    </div>
  )
}

const Square = ({ isBlack, position, size }: { isBlack: boolean; position: number; size: number }) => {
  return (
    <div style={{
      width: size,
      height: size,
      backgroundColor: isBlack ? "black" : "white",
    }}>
      <span style={{
        color: "gray",
        fontSize: 10,
        padding: 5,
      }}>{position}</span>
    </div>
  )
}