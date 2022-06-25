import React, {useState} from 'react';
import UsersList from "../../components/usersList/UsersList";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [product, setProduct] = useState({
        name: "ы",
        price: 0,
        status: true
    })

    const getUsers = () => {
        setUsers(["Dastan", "Emir", "Daniyar"])
    }

    const getProduct = () => {
        setProduct({
            name: "Meat",
            price: '99 c',
            status: true
        })
    }

    return (
        <div>
            <button onClick={getUsers}>get users</button>
            <UsersList users={users}/>

            ---------------------------

            <button onClick={getProduct}> get product</button>
            <ul>
                {
                    product.status
                        ?
                        <>
                            <li>Название: {product.name}</li>
                            <li>Стоимость: {product.price}</li>
                            <li>В наличие: да</li>
                        </>
                        :
                        <li>Продукт не найден</li>
                }

            </ul>
        </div>
    );
}

export default UsersPage;