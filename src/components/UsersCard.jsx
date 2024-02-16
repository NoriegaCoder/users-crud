import React from 'react'
import './style/UsersCard.css'

const UsersCard = ({user, deleteUser, setEditUser, isOpen, setIsOpen}) => {

    const handleDelete = () => {
        deleteUser('/users', user.id)
    }

    const handleEdit = () => {
        setEditUser(user)
        setIsOpen(!isOpen)
    }

  return (
    <article className='cardBackground'>
        <h3 className='cardName'>{user.first_name} {user.last_name}</h3>
        <hr />
        <ul className='cardList'>
            <li className='cardItem'><span>EMAIL</span><br />{user.email}</li>
            <li className='cardItem'><span>BIRTHDAY</span><br /><ion-icon name="gift-outline"></ion-icon> {user.birthday}</li>
        </ul>
        <hr />
        <div className='btnWrapper'>
        <button onClick={handleEdit} className='editBtn'><ion-icon name="create-outline" size="small"></ion-icon></button>
        <button onClick={handleDelete} className='deleteBtn'><ion-icon name="trash-bin-outline" size="small"></ion-icon></button>
        </div>
        
    </article>
  )
}

export default UsersCard