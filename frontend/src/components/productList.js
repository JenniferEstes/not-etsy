import React, { useEffect } from 'react'
import { useDispatch, useSelector} from "react-redux";
import { fetchProducts } from "../actions/productActions";

export default function ProductList() {
    const productList = useSelector( state => state.products)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    return (
        <div>
            <ul>
                {productList.map(p =>
                    <li>(p.name)</li>,
                    <li>(p.price)</li>
                )}
            </ul>
        </div>
    )
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