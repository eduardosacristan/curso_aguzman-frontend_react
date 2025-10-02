import { useEffect, useState } from "react";
import { listProducts } from "../services/PropductService";


export const ProductApp = () => {

    const [products, setProducts] = useState([]);

    //justo después de crear el componente se ejecuta el useEffect una sola vez
    useEffect( () => {
        const result = listProducts;
        setProducts(result)
    }, []);


    return (
        <>
            <h1>Hola mundo react!</h1>

            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>

                    {products.map(product => {
                        return (<tr key={product.name}>
                            <td>{product.name}</td>
                            <td>{product.descripcion}</td>
                            <td>{product.price}</td>                            
                        </tr>)
                    })}

                </tbody>
            </table>
        </>
    )
}