import {useLoaderData} from "react-router-dom";

const Users = () => {
    const {users} = useLoaderData();

    return <div className='users'>
        <ul>
            {users.map((user, key) => {
                return <li key={key}>{user.name}</li>
            })}
        </ul>
    </div>
};

export default Users;