import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector} from 'react-redux'
import Business from './Business'
import BusinessForm from './BusinessForm'

export default function BusinessList() {
    // const busList = useSelector( state => state.businesses.businesses)
    // const dispatch = useDispatch()

    const [businesses, setBusinesses] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/businesses')
            .then(resp => resp.json())
            .then(result =>
            // With empty dependency, you would have to refresh browser to see new business
            setBusinesses(result)
            )
    })

        const businessObjects = businesses.map((business) =>
        (<Business
            key={business.id}
            business={business}
        />)
    )

        return (
        <>
            <BusinessForm />
            {businessObjects}
        </>
    )
}