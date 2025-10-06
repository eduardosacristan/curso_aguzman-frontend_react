import { useEffect, useState } from "react"

const initialDataForm = {
        name: '',
        description: '',
        price: ''
    }

export const ProductForm = ({handlerAdd, productSelected}) => {

    const [form, setForm] = useState(initialDataForm);
    const { name, description, price } = form;

    useEffect( () => {
        setForm(productSelected);
    }, [productSelected]);

    return (
        <form onSubmit={(event) => {
            event.preventDefault(); //evita el refresh en el formulario
            
            if(!name || !description || !price) {
                alert('Debe completar los datos de formulario!');
                return;
            }

            console.log(form);
            handlerAdd(form);
            setForm(initialDataForm) //Limpiar el formulario
        }}>
            <div>
                <input name="name"
                    style={{ 'marginBottom': '2px' }}
                    type="text"
                    placeholder="name"
                    label=""
                    value={name}
                    onChange={(event) => setForm({
                        ...form,
                        name: event.target.value
                    })} />


            </div>
            <div>

                <input name="description"
                    style={{ 'marginBottom': '2px' }}
                    type="text"
                    placeholder="description"
                    label=""
                    value={description}
                    onChange={(event) => setForm({
                        ...form,
                        description: event.target.value
                    })} />
            </div>
            <div>
                <input name="price"
                    style={{ 'marginBottom': '4px' }}
                    type="number"
                    placeholder="price"
                    label=""
                    value={price}
                    onChange={(event) => setForm({
                        ...form,
                        price: event.target.value
                    })} />
            </div>
            <div>
                <button type="submit">Save</button>
            </div>

        </form>
    )
}