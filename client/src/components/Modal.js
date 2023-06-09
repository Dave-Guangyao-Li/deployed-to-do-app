import React from 'react'
import { useState } from 'react'

const Modal = ({ mode, setShowModal, task }) => {
    // const mode = "create"
    const editMode = mode === "edit" ? true : false
    const [data, setData] = useState({
        user_email: editMode ? task.user_email : "",
        title: editMode ? task.title : "",
        progress: editMode ? task.progress : 50,
        date: editMode ? "" : new Date()
    })



    const handleChange = (e) => {
        console.log(e)
        const { name, value } = e.target // this is destructuring, it's the same as const name = e.target.name and const value = e.target.value

        // set key-value pairs in the data object
        setData(data => ({
            ...data,
            [name]: value // overwrite the value of the key with the name of the input
        }))

        console.log(data)

    }

    return (
        <div className='overlay' >
            <div className='modal'>
                <div className='form-title-container'>
                    <h3>Let's {mode} your task! </h3>
                    <button onClick={() => setShowModal(false)}>X</button>
                </div>

                <form>
                    <input
                        required
                        maxLength={30}
                        placeholder=" Your task goes here"
                        name="title"
                        value={data.title}
                        onChange={handleChange}
                    />
                    <br />
                    <label htmlFor="range">Drag to select your current progress</label>
                    <input
                        required
                        type="range"
                        id="range"
                        min="0"
                        max="100"
                        name="progress"
                        value={data.progress}
                        onChange={handleChange}
                    />
                    <input className={mode} type="submit" />
                </form>




            </div>
        </div >
    )
}

export default Modal