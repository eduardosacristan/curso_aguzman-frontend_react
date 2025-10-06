import PropTypes from "prop-types";

export const ProductDetail = ({product = {}, handlerRemove, handlerProductSelected }) => {
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.description}</td>
            <td>{product.price}</td>
            <td><button onClick={ () => handlerProductSelected(product)}>UPDATE</button></td>
            <td><button onClick={ () => handlerRemove(product.name)}>BORRAR</button></td>
        </tr>
    );
}

ProductDetail.propTypes = {
    product: PropTypes.object.isRequired
}
