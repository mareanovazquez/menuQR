import { useState } from "react";



export const AdminBakery = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [menuItems, setMenuItems] = useState([]);

    const addMenuItem = () => {
        const newItem = {
            name: name,
            description: description,
            price: price
        };
        setMenuItems([...menuItems, newItem]);

        // Clear form inputs
        setName('');
        setDescription('');
        setPrice('');
    };

    return (
        <div>
            <h2>BAKERY</h2>
            <form onSubmit={(e) => { e.preventDefault(); addMenuItem(); }}>
                <label htmlFor="item-name">Nombre del ítem:</label>
                <input
                    type="text"
                    id="item-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />

                <label htmlFor="item-description">Descripción:</label>
                <input
                    type="text"
                    id="item-description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />

                <label htmlFor="item-price">Precio:</label>
                <input
                    type="text"
                    id="item-price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    required
                />

                <button type="submit">Agregar ítem</button>
            </form>

            <div className="menu-body">
                {menuItems.map((item, index) => (
                    <div className="menu-item" key={index}>
                        <div className="item-name">
                            <p className="name">{item.name}</p>
                            <p className="description">{item.description}</p>
                        </div>
                        <p className="item-price">${item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};