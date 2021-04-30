import React, { useEffect, useState } from 'react'
import { Spinner } from 'react-bootstrap'
import UserCard from './UserCard'

const UserList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchUsers =() => {
            fetch("https://jsonplaceholder.typicode.com/users/")
            .then((res) => res .json())
            .then((data) => setUsers(data))
            .catch((err)=>console.error(err))
        }
        fetchUsers() ;
        setLoading(false);
    }, [])
    return (
        <div >
            {loading ? (
            <Spinner animation="border" /> 
        ):(<div style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}} >
         {users.map((user,index)=> (<UserCard user={user} key={index} />))}
         </div>
        )}
        </div>
    )
}

export default UserList
