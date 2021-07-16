import React, { useEffect, useState } from 'react'
// import { useDispatch, useSelector} from 'react-redux'
import { fetchBusinesses } from '../actions/businessActions'
// import Card from 'react-bootstrap/Card'
import Business from './Business'
import BusinessForm from './BusinessForm'

export default function BusinessList() {
    // const busList = useSelector( state => state.businesses.businesses)
    // const dispatch = useDispatch()

    const [businesses, setBusinesses] = useState([])

    useEffect(() => {
        fetchBusinesses().then(businessList =>
            // With empty dependency, you would have to refresh browser to see new business
            setBusinesses(businessList))
    })

    // useEffect(() => {
    //     fetchBusinesses()
    // }

        const businessObjects = businesses.map((business) =>
        (<Business
            key={business.id}
            business={business}
        />)
    )

        return (
        <>
            <BusinessForm />
            <div>{businessObjects}</div>
        </>
    )
}