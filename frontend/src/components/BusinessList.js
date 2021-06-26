import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchBusinesses } from "../actions/businessActions";

export default function BusinessList() {
    const busList = useSelector( state => state.businesses)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchBusinesses())
    }, [dispatch])

    return (
        <div>
            <ul>
                {busList.map(b => <li>(b.name)</li>)}
            </ul>
        </div>
    )
}
