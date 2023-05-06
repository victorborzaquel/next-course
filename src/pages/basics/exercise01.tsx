export default function exercise01() {
  const quantity = 20

  const content = (quantity: number) => {
    const result = []

    for (let i = 0; i < quantity; i++) {
      if (i === quantity - 1) {
        result.push(<span>{i + 1}</span>)
        break
      }

      result.push(<span>{i + 1}, </span>)
    }

    return result
  }

  return (
    <div>
      {
        content(quantity)
      }
    </div>
  )
}