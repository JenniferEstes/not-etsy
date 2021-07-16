import React, {useState} from 'react'

export default function BusinessForm(props) {

    const [businessName, setBusinessName] = useState('')

    const addToBusinessList = e => {
        e.preventDefault()
        fetch('http://localhost:3000/businesses', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                business: {
                    name: businessName
                }
            })
        }).then(() => {
            alert('Added new business: ' + businessName)
            setBusinessName('')
        }).catch(err => {
            console.log('Could not save business: ', err)
        })
    }

    const onInputChange = e => setBusinessName(e.target.value)

    return (
        // controlled form - derives its input values from state
        <>
            <h3> Add A Business </h3>
            <form onSubmit={addToBusinessList}>
                <input
                    type="text"
                    placeholder="Business Name"
                    value={businessName}
                    onChange={onInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}
