import React,{useState} from 'react'



const CreateUser = () => {

    const [username,setUsername] = useState('')


    const onChangeUser = (event) => {
        setUsername(event.target.value)
    }

    const onSubmitForm = (event) => {

        event.preventDefault()

        const user = {username}

        console.log(user)

        setUsername('')
    }

    return(
        <div>
            <h1>Add New User</h1>
            <form onSubmit={onSubmitForm}>
                <div className="form-group">
                    <label>Username:</label>
                    <input type="text" required className="form-control" value={username} onChange={onChangeUser} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Create New User" className="btn btn-primary" />
                </div>
            </form>
        </div>
    )
}

export default CreateUser