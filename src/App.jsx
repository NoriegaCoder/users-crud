import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/UseFetch'
import UsersForm from './components/UsersForm'
import UsersCard from './components/UsersCard'


const urlBase = 'https://crud-814q.onrender.com/api/v1'


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
  const [borrado, setBorrado] = useState(false)

  const handleConfirm = e => {
    setBorrado(false)
  }




   /*---------------------- */
  return (
    <div className='wrapper'>
      <header className='header'>
        <h1>Users</h1>
        <button onClick={handleOpen} className='headerBtn'>+ New user</button>
      </header>

      <div className={`overlay ${borrado&&'able'}`}>
      <div className='overlayCloser' onClick={handleConfirm}></div>
        <div className='overlayWrapper'>
            <h3 className='ovarlayTitle'>Succesfuly deleted</h3>
            <button className='overlayBtn' onClick={handleConfirm}>Ok</button>
        </div>
        </div>
      
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
          borrado= {borrado}
          setBorrado={setBorrado}
          />
          
          ))
        }
        </div>
    </div>
  )
}

export default App
