import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/UseFetch'
import UsersForm from './components/UsersForm'
import UsersCard from './components/UsersCard'


const urlBase = 'http://users-crud.academlo.tech'


function App() {  
  const [users, getUsers, postUsers, deleteUser, updateUser] = useFetch(urlBase)
  const [editUser, setEditUser] = useState()
  const [adding, setAdding] = useState(true)

  useEffect(() =>{
    getUsers('/users')
  }, [])

  /*---------------------- */
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(!isOpen)
    setEditUser()
    setAdding(!adding)
}
  /*---------------------- */
  
  return (
    <div className='wrapper'>
      <header className='header'>
        <h1>Users</h1>
        <button onClick={handleOpen} className='headerBtn'>+ New user</button>
      </header>
      
      <UsersForm
      postUsers={postUsers}
      editUser={editUser}
      updateUser={updateUser}
      setEditUser={setEditUser}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      adding = {adding}
      setAdding = {setAdding}
      />

<div className='usersGrid'>
      {
        users?.map(user=> (
          <UsersCard
          key={user.id}
          user={user}
          deleteUser={deleteUser}
          setEditUser={setEditUser}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          />
          
          ))
        }
        </div>
    </div>
  )
}

export default App
