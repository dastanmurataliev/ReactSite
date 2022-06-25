import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage() {
    const [users, setUsers] = useState([]);

    const getUsers = () => {
        setUsers(["Dastan", "Emir", "Daniyar"])
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <UsersList users={users}/>
        </div>
    );
}

export default UsersPage;