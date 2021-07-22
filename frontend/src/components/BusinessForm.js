import React, { useState } from 'react'

export default function BusinessForm() {
    const [businessName, setBusinessName] = useState('')

    const onInputChange = e => setBusinessName(e.target.value)

    const addToBusinessList = e => {
        e.preventDefault()
        fetch('http://localhost:3000/businesses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                business: {
                    name: businessName
                }
            })
        })
            .then(resp => resp.json())
            .then(() => {
                alert('Added new business: ' + businessName)
                setBusinessName("")
            })
            .catch(error => {
                console.log("Unable to add business. Please try again", error)
            })
    }

    return (
        // controlled form - derives its input values from state
        <div>
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
            <br/>
        </div>
    )
}


// import React, { Component  } from 'react'
//
// class BusinessForm extends Component {
//
//     state = {
//         formInput: {
//             businessName: ""
//         },
//         error: null
//     }
//
//     onInputChange = e => {
//         this.setState({
//             formInput: {
//                 ...this.state.formInput,
//                 businessName: e.target.value
//             }
//         })
//     }
//
//     addToBusinessList = (e, formInput) => {
//         e.preventDefault()
//         this.props(formInput)
//     }
//
//     componentDidMount() {
//         fetch('http://localhost:3000/businesses', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//             ,
//             body: JSON.stringify(this.state.formInput)
//         })
//             .then(resp => resp.json())
//             .then(result => {
//                     this.setState({
//                         businessName: result.businessName
//                     })
//             })
//     }
//
//     render() {
//             return (
//                 <div>
//                     <h3> Add A Business </h3>
//                     <form onSubmit={(e) => this.addToBusinessList(e, this.state.formInput)}>
//                         <input
//                             type="text"
//                             placeholder="Business Name"
//                             value={this.state.formInput.businessName}
//                             onChange={this.onInputChange}
//                         />
//                         <button type="submit">Submit</button>
//                     </form>
//                     <br/>
//                 </div>
//             )
//         }
// }
// export default BusinessForm