export function getStaticProps() {
  return {
    props: {
      number: Math.random()
    }
  }
}

export default function Static({number}: {number: number}) {
  return (
    <div>
      <h1>Static</h1>
      <p>Random number: {number}</p>
    </div>
  )
}