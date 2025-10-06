import axios from "axios";

const initProducts = [
    {
        name: 'Monitor Samsung 123',
        price: 5000,
        description: 'Castaña total'
    },
    {
        name: 'iPhone 10',
        price: 1000,
        description: 'Un teléfono'
    }
];

const baseUrl = 'http://localhost:8080/products'

export const listProducts = () => {
    return initProducts;
}

//Realizar una petición asíncrona
export const findAll = async () => {
    try {
        const response = await axios.get(baseUrl);
        return response;
    } catch (error) {
        console.log(error);
    }


}