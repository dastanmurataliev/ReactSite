import React, {useState} from 'react';

function ContactsPage(props) {
    const [user, setUser] = useState({
        name: "",
        lastName: "",
        age: "",
        message: ""
    })

    const changeInput = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const submit = (e) => {
        e.preventDefault();
        if(!user.name.trim() || !user.lastName.trim() || !user.message.trim()) {
            alert("Заполните все поля");
            return
        }

        console.log(user)
    }

    return (
        <>
            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    value={user.name}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="last name"
                    name="lastName"
                    value={user.lastName}
                    onChange={changeInput}
                />
                <input
                    type="text"
                    placeholder="age(не обязательно)"
                    name="age"
                    value={user.age}
                    onChange={changeInput}
                />
                <textarea
                    name="message"
                    value={user.message}
                    onChange={changeInput}
                />

                <button type="submit">submit</button>
            </form>

        </>
    );
}

export default ContactsPage;