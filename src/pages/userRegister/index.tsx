import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function userRegister() {
  const [name, setName] = useState("")
  const [age, setAge] = useState(undefined as number | undefined)

  const [users, setUsers] = useState([] as Array<{name: string; age: number}>)

  function handleSubmit() {
    fetch('/api/user', {
      method: 'POST',
      body: JSON.stringify({name, age})
    }).then(res => {
      if (res.status !== 201) {
        alert('Error creating user!')
      }

        alert('User created successfully!')
        setName("")
        setAge(undefined)
        loadUsers()
    })
  }

  function loadUsers() {
    fetch('/api/user')
      .then(res => res.json())
      .then(setUsers)
      .catch(err => {console.log(err); alert('Error loading users!')})
  }

  useEffect(() => {
    loadUsers()
  }, [])
  

  return (
    <div>
    <h1>Register</h1>
    <div>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />

      <label htmlFor="age">Age</label>
      <input type="number" name="age" id="age" value={age} onChange={e => setAge(Number(e.target.value))}  />

      <button onClick={handleSubmit}>Register</button>
    </div>
    <div>
      <Users users={users} />
    </div>
    </div>
  )
}

function Users({users}: {users: Array<{name: string; age: number}>}) {
  return (
    <div>
      <h2>Users</h2>
      <ul id="users">
        {users.map(user => <User user={user} />)}
      </ul>
    </div>
  )
}

function User({user}: {user: {name: string; age: number}}) {
  return <li>{user.name} - {user.age}</li>
}
