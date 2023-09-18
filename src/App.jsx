import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import FormUsers from './components/FormUsers';
import UserCard from './components/UserCard'; 




function App() {
  
  const baseUrl = `https://users-crud.academlo.tech`
  const [ users, getUsers, createUser, deleteUser, updateUser ] = useFetch(baseUrl)
  const [infoUpdate, setInfoUpdate] = useState()


  useEffect(() => {
    getUsers(`/users`)
  }, [])

  return (
    <section class="body">
    <div class="div1">
      <h2 class="h2">Form User</h2>
      <FormUsers
        createUser={createUser}
        infoUpdate={infoUpdate}
        updateUser={updateUser}
        setInfoUpdate={setInfoUpdate}
      />
      <div class="div2">
        {
          users?.map(user => (
            <UserCard 
              key={user.id}
              user={user}
              deleteUser={deleteUser}
              setInfoUpdate={setInfoUpdate}
            />
          ))
        }
      </div>
    </div>
  </section>
  )
}

export default App
