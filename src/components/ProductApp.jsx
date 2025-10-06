import { useEffect, useState } from "react";
import { findAll } from "../services/PropductService";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";


export const ProductApp = ({ title }) => {

    const [products, setProducts] = useState([]);

    const [productSelected, setProductSelected] =
        useState({
            name: '',
            description: '',
            price: ''
        })

    const getProducts = async () => {
        const result = await findAll();
        setProducts(result.data._embedded.products);
    } 
    
        //justo después de crear el componente se ejecuta el useEffect una sola vez
    useEffect(() => {
        getProducts();        
    }, []);

    const hadlerAddProduct = (product) => {
        //console.log(product);

        if (products.includes(product)) {
            setProducts(products.map(prod => {
                if (prod.name == product.name) {
                    return { ...product }
                }
                return prod;
            }))
        } else {
            setProducts([...products, { ...product }]);
        }


    }

    const handlerRemoveProduct = (name) => {
        console.log(name);
        setProducts(products.filter(product => product.name != name));
    }

    const handlerProductSelected = (product) => setProductSelected({ ...product });


    return (
        <>
            <div className="container my-4">
                <h2>{title}</h2>
                <div className="row">
                    <div className="col">
                        <ProductForm handlerAdd={hadlerAddProduct} productSelected={productSelected} />
                    </div>
                    <div className="col">
                        <ProductGrid products={products} handlerRemove={handlerRemoveProduct} handlerProductSelected={handlerProductSelected} />
                    </div>
                </div>
            </div>
        </>
    )
}

ProductApp.propTypes = {
    title: PropTypes.string.isRequired
}