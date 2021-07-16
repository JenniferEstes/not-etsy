import React from 'react'
import BusinessCard from "./BusinessCard";

class Business extends React.Component{

    state = {
        name: this.props.business.name
    }

    render(){
        return(
            <BusinessCard business={this.state} />
        )
    }
}

export default Business




















// export default function Business(props) {
//
//     const [bus, setBus] = useState("")
//
//     const handleSubmit = e => {
//         // Invoke callback with new value
//         props.onChange(e.target.value)
//     }
//
//     return (
//         <input
//             value={props.bus}
//             onChange={handleSubmit}
//         />
//     )
// }