import Link from "next/link";
import { useRouter } from "next/router"

export default function search() {
  const router = useRouter()
  const {id, name} = router.query as {id: string; name: string}

  const nextId = parseInt(id) + 1
  const names = ['Victor', 'João', 'Maria', 'Pedro', 'Paulo']

  const handleClick = () => {
    router.push(`/next/dynamic/${nextId}/${names[nextId]}`)
  }

  const handleClickParams = () => {
    router.push({
      pathname: '/next/params',
      query: {
        id: nextId,
        name: names[nextId]
      }
    })
  }
  
  return (
    <>
    <h1>Id: {id}</h1>
    <h2>Name: {name}</h2>

    <Link href={`/next/dynamic/${nextId}/${names[nextId]}`}>
      <button>navegue</button>
    </Link>

    <div style={{
      display: 'flex',
      flexDirection: 'column',
    }}>
      <button onClick={handleClick}>GOGO</button>
      <button onClick={handleClickParams}>Params</button>
    </div>
    </>
  )
}