import { useEffect, useState } from "react";
import { listProducts } from "../services/PropductService";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";


export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);

    //justo después de crear el componente se ejecuta el useEffect una sola vez
    useEffect(() => {
        const result = listProducts;
        setProducts(result)
    }, []);

    const hadlerAddProduct = (product) => {
        console.log(product);
        setProducts([...products, {...product}]);
    }

    return (
        <>
            <div>
                <h1>{title}</h1>
                <div>
                    <div>
                        <ProductForm handlerAdd={hadlerAddProduct}/>
                    </div>
                    <div>
                        <ProductGrid products={products} />
                    </div>
                </div>
            </div>
        </>
    )
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}