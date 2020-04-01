import React,{useState,useEffect}  from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CreateUser = () => {

    const [username,setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date,setDate] = useState(new Date()) 

    const [users,setUsers] = useState([])

    
    useEffect( () => {
        const usersArray = ['test user', 'Kamran','hazbuo']
        setUsers(usersArray)
       // username = 'test user'
    },[])

    const onChangeUsername =(event) =>{
        setUsername(event.target.value)
    }

    const onChangeDescription =(event) =>{
        setDescription(event.target.value)
    }

    const onChangeDuration =(event) =>{
        setDuration(event.target.value)
    }

    const onChangeDate =(date) =>{
        setDate(date)
    }


    const onSubmitForm = (event) => {
        event.preventDefault()

        const exercise = {
            username,
            description,
            duration,
            date 
        }

        console.log(exercise)

        window.location = '/'
    }

    return(
        <div>
            <h1>Create An Exercise</h1>

                <form onSubmit={onSubmitForm}>
                    <div className="form-group">
                        <label>Username:</label>
                        <select  required className="form-control" value={username} onChange={onChangeUsername}>
                            {
                                users.map( user => {
                                    return <option key={user} value={user}>{user} </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                            <label>Description: </label>
                            <input type="text" required className="form-control" value={description} onChange={onChangeDescription} />
                    </div>
                    <div className="form-group">
                            <label>Duration: </label>
                            <input type="text" required className="form-control" value={duration} onChange={onChangeDuration} />
                    </div>
                    <div className="form-group">
                            <label>Description: </label>
                            <div>
                                <DatePicker selected={date} onChange={onChangeDate}
                                />
                            </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
                    </div>
                </form>

        </div>
    )
}

export default CreateUser