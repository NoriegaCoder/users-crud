import axios from 'axios'
import { useState } from 'react'

const UseFetch = (urlBase) => {
const [users, setUsers] = useState()

const getApi = (path) => {
    axios.get(`${urlBase}${path}/`)
        .then(res => {
            setUsers(res.data)
            //console.log(users)
        })
        .catch(err => console.log(err))
}

const postApi = (path, data) => {
    axios.post(`${urlBase}${path}/`, data)
        .then(res => {
            setUsers([...users,res.data])
            console.log(users)
        })
        .catch(err=> console.log(err))
}

const updateApi = (path, id, data) => {
    axios.patch(`${urlBase}${path}/${id}/`, data)
    .then(res => {
        setUsers(users.map(element => element.id===id? res.data : element))
        console.log(res.data)
    })
    .catch(err => console.log(err))
}

const deleteApi = (path, id) => {
    axios.delete(`${urlBase}${path}/${id}/`)
        .then(() => {
            setUsers(users.filter(element => element.id!==id));

            console.log('elemento borrado exitosamente')
        })
        .catch(err => console.log(err))
}


  return [users, getApi, postApi, deleteApi, updateApi]
}

export default UseFetch