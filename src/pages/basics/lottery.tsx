import { useEffect, useState } from "react";

export default function lottery() {
  const [numbers, setNumbers] = useState([] as Array<number>)
  const [quantity, setQuantity] = useState(6)

  const generateNumbers = () => {
    if (quantity < 6 || quantity > 10) {
      throw new Error('Quantity must be between 6 and 10')
    }

    const allNumbers = Array.from({ length: 60 }, (_, i) => i + 1)
    const numbers = [] as Array<number>

    for (let i = 0; i < quantity; i++) {
      const index = Math.floor(Math.random() * allNumbers.length)
      numbers.push(allNumbers[index])
      allNumbers.splice(index, 1)
    }

    return numbers.sort((a, b) => a - b)
  }

  const handleClick = () => {
    setNumbers(generateNumbers())
  }

  const handleChange = (value: string) => {
    setQuantity(parseInt(value))
  }

  useEffect(() => {
    setNumbers(generateNumbers())
  }, [])

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      width: '100vw',
      height: '100vh',
    }}>
      <Result>
        {numbers.map((number, i) => <Number key={i} value={number} />)}
      </Result>

      <Quantity value={quantity} handleChange={handleChange} />
      <Button handleClick={handleClick} />
    </div>
  );
}

const Button = ({ handleClick }: { handleClick(): void }) => {
  return (
    <button style={{
      padding: 10,
      margin: 10,
    }}
      onClick={handleClick}>Generate</button>
  )
}

const Quantity = ({ value, handleChange }: { value: number; handleChange(value: string): void }) => {
  return (
    <input style={{
      padding: 10,
      margin: 10,
      color: 'black',
    }} type="number" min={6} max={10} value={value} title="quantity" onChange={e => handleChange(e.target.value)} />
  )
}

const Result = ({ children }: { children: React.ReactNode }) => (
  <div>
    {children}
  </div>
)

const Number = ({ value }: { value: number }) => (
  <span style={{
    fontSize: 20,
    padding: 10,
    borderRadius: '50%',
    backgroundColor: 'white',
    color: 'black',
    margin: 10,
  }}>{value}</span>
)
