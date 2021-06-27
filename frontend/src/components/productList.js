import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchProducts, toggleFavorite } from "../actions/productActions";
import Product from "./Product";

export default function ProductList() {
    // #first arg is state from store
    // #first products is from rootReducer
    // second products is from productActions
    const productList = useSelector(state => state.products.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    return productList != null ? (
        <div>
            {productList.map((p, id) =>
                <ul>
                    <li key={id}>{p.name}</li>
                    <li>{p.price}</li>
                </ul>
            )}
        </div>
    ) : (<div></div>)
}
















//
//
// class ProductList extends Component {
//     render() {
//         const products = this.props.products.map(p => <Product product={p} />)
//         return (
//             <div>
//                 {products}
//             </div>
//         )
//     }
// }
// // grab all state in store state and make index
//     const mapStateToProps = (stateFromStore) => {
//         // return obj w/ property and value of products in Redux store
//         return{
//             products: stateFromStore.products
//         }
//     }
//
// export default connect(mapStateToProps)(ProductList)