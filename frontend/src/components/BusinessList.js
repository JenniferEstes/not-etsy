import React, { Component } from 'react'
import Business from './Business'
import BusinessForm from './BusinessForm'
import Button from './Button'

class BusinessList extends Component {

    state = {
        businesses: []
    }

    componentDidMount() {
        fetch('http://localhost:3000/businesses')
            .then(resp => resp.json())
            .then(result => {
                this.setState({businesses: result
                })
            })
    }

    businessObjects = () => {
        return this.state.businesses.map((business) =>
            (<Business
                key={business.id}
                business={business}
            />)
        )
    }

    handleUpdate = (updatedBusiness) => {
        this.setState(prevState => {
            return {
                businesses: [...prevState.businesses, updatedBusiness]
            }
        })
    }

    handleClick = () => {
        this.setState(prevState => {
            return {
                businesses: prevState.businesses.sort((a, b) => {
                    return a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1
                })
            }
        })
    }
    render(){
        return(
            <div>
                <BusinessForm handleBusiness={this.handleUpdate}/>
                <Button handleClick={this.handleClick} />
                {this.businessObjects()}
            </div>
        )
    }
}

export default BusinessList



// import React, { useEffect, useState } from 'react'
// import Business from './Business'
// import {Button} from './Button'
// import BusinessForm from './BusinessForm'
//
// export default function BusinessList() {
//
//     const [businesses, setBusinesses] = useState([])
//
//
//     useEffect(() => {
//         fetch('http://localhost:3000/businesses')
//             .then(resp => resp.json())
//             .then(result =>
//             setBusinesses(result)
//             )
//     }, [])businessObjects
//
//     const businessObjects = businesses.map((business) =>
//         (<Business
//             key={business.id}
//             business={business}
//         />)
//     )
//
//     const handleClick = () => {
//         setBusinesses(prevState => [...prevState].sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))
//     }
//
//     const handleBusiness = (newBusiness) => {
//         setBusinesses(prevState => [...prevState, newBusiness])
//     }
//
//
//     return (
//         <>
//             <BusinessForm handleBusiness={handleBusiness}/>
//             <Button handleClick={handleClick} />
//             {businessObjects}
//         </>
//     )
// }