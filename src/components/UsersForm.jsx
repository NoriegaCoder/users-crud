import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './style/UsersForm.css'

const UsersForm = ({postUsers, editUser, updateUser, setEditUser, isOpen, setIsOpen}) => {
    const {handleSubmit, register, reset, adding, setAdding} = useForm();
    
    /*
    useEffect(() => {
        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
    }, [adding]) */
    

    const submit = (data) => {        
        if (editUser) {
            updateUser('/users',editUser.id,data)
            setEditUser()
            setAdding(false)
        } else {
            postUsers('/users',data)
        }

        reset({
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            birthday: '',
        })
        setIsOpen(false)
    }
 
    const handleClose = () => {
        setIsOpen(!isOpen)
    }
    
    useEffect(() => {
        reset(editUser)
    }, [editUser])
    
    //console.log(editUser)

  return (
    <article className={`formBackground ${isOpen&&'able'}`} >
        <div className='formCloser' onClick={handleClose}></div>
    <form className='formContainer' onSubmit={handleSubmit(submit)} >
        <h2 className='formTitle'>New User</h2>
        <div className='formItem'>
            <label htmlFor="name">Name</label>
            <input {...register('first_name')} id='name' type="text" required/>
        </div>
        <div className='formItem'>
            <label htmlFor="lastName">Last Name</label>
            <input {...register('last_name')} id='lastName' type="text" required/>
        </div>
        <div className='formItem'>
            <label htmlFor="email">Email</label>
            <input {...register('email')} id='email' type="text" required/>
        </div>
        <div className='formItem'>
            <label htmlFor="password">Password</label>
            <input {...register('password')} id='password' type="password" required/>
        </div>
        <div className='formItem'>
            <label htmlFor="birthDate">Birth Date</label>
            <input {...register('birthday')} id='birthDate' type="date" required/>
        </div>
        <button className='btn' type="submit">Add new user</button>
    </form>
    </article>
  )
}

export default UsersForm