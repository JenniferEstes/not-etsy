import React from 'react'
import BusinessCard from "./BusinessCard";

class Business extends React.Component{

    // props available bc passing business obj into business comp on BusinessList.js'
    state = {
        name: this.props.business.name
    }

    render(){
        return(
            // state is value bc state contains info I want card to display
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