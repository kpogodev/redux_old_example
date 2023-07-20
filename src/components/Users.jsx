import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../actions/usersAction'

const Users = () => {
    const dispatch = useDispatch()
    const {users, loading , message} = useSelector((state) => state.users)

    useEffect(() => {
       dispatch(getUsers())
    }, [])
    
    return (
        <>
        {}
            {users.length > 0  ? users.map((user) => (
                <div key={user.id} style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '10px', border: '1px solid red' }}>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                </div>
            ))
            : ( loading ? <div>Loading...</div> : <div>No users found</div> )
        }
        {message}
        </>
    )
}

export default Users
