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

export const create = async ({ name, description, price }) => {

    try {
        const response = await axios.post(baseUrl, {
            name: name,
            description: description,
            price: price
        });

        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined
}

export const update = async ({ id, name, description, price }) => {

    try {
        const response = await axios.put(baseUrl + '/' + id, {
            name: name,
            description: description,
            price: price
        });

        return response;
    } catch (error) {
        console.log(error);
    }
    return undefined
}