export default function lists() {
  const names = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Mallory", "Oscar", "Peggy", "Sybil", "Trent", "Victor", "Walter"]
  
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
    }}>
      <ul>
        {names.map((name, i) => <li key={i}>{name}</li>)}
      </ul>
    </div>
  )
}