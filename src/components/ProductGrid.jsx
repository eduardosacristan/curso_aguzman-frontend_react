import PropTypes from "prop-types"
import { ProductDetail } from "./ProductDetail"

export const ProductGrid = ({ products = [], handlerRemove, handlerProductSelected }) => {

    return (
        <table className="table table-hover tbl-striper">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Precio</th>
                    <th>Update</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return <ProductDetail 
                        product={product}  
                        key={product.name} 
                        handlerRemove = { handlerRemove } 
                        handlerProductSelected = { handlerProductSelected }/>
                })}

            </tbody>
        </table>
    )
}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired
}