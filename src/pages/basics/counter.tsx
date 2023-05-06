import { CSSProperties, useState } from "react"

export default function counter() {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    setCount(count => count + 1)
  }

  const handleDecrement = () => {
    setCount(count => count - 1)
  }

  return (
    <div>
      <h1>Counter</h1>

      <div>
        <button style={styles.button} onClick={handleDecrement}>-</button>
        <span style={styles.span}>{count}</span>
        <button style={styles.button} onClick={handleIncrement}>+</button>
      </div>
      
    </div>
  )
}

const styles: {
  button: CSSProperties;
  span: CSSProperties;
} = {
  button: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: "yellow",
    color: "black",
  },
  span: {
    fontSize: '2rem',
    margin: 10,
  },
}