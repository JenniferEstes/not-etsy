import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchBusinesses } from "../actions/businessActions";
import Card from 'react-bootstrap/Card'

export default function BusinessList() {
    // #first arg is state from store
    // #first businesses is from rootReducer
    // second businesses is from businessActions
    const busList = useSelector( state => state.businesses.businesses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBusinesses())
    }, [dispatch])

    return busList != null ? (
        <div>
            {busList.map((b, inx) =>
                    <Card style={{ width: '18rem' }}>
                        <div key={inx} className="business-container"></div>
                        <Card.Body>
                            {b.name}
                        </Card.Body>
                    </Card>
            )}
        </div>
    ) : (<div></div>)
}
