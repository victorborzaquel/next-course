import { useRouter } from "next/router";

export default function params() {
  const router = useRouter()

  const {id, name} = router.query as {id: string; name: string}

  return (
    <>
    <h1>Id: {id}</h1>
    <h2>Name: {name}</h2>
    </>
  )
}