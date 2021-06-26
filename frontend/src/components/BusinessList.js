import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchBusinesses } from "../actions/businessActions";

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
                <ul>
                    <li key={inx}>{b.name}</li>
                </ul>
                // Put back button here
            )}
        </div>
    ) : (<div></div>)
}
