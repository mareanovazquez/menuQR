import { faCheck, faEdit, faSave, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";

export const AdminComidas = () => {
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
        <>
            <div className="container-title-admin">
                <h2>Comidas</h2>
            </div>
            <div className="container-form-admin">
                <h4>Añadir nuevos productos</h4>
                <form onSubmit={(e) => { e.preventDefault(); addMenuItem(); }}>
                    <label htmlFor="item-name">Nombre</label>
                    <input
                        type="text"
                        id="item-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <label htmlFor="item-description">Descripción</label>
                    <input
                        type="text"
                        id="item-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />

                    <label htmlFor="item-price">Precio</label>
                    <input
                        type="text"
                        id="item-price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        required
                    />

                    <button type="submit"><FontAwesomeIcon icon={faCheck} /></button>
                </form>

            </div>
            <div className="seccion seccion-comidas">
                <div className="menu-container menu-comidas">
                    <div className="menu-header">
                        <span className="header-item"></span>
                        <span className="header-item"></span>
                    </div>
                    <div className="menu-body">
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Tostada con palta </p>
                                <p className="description">Descripción</p>
                            </div>
                            <p className="item-price">$0000.00</p>
                            <div className="btn-admin">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Tostado clásico</p>
                                <p className="description"></p>
                            </div>
                            <p className="item-price">$0000.00</p>
                            <div className="btn-admin">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Sandwich vegano</p>
                                <p className="description"></p>
                            </div>
                            <p className="item-price">$0000.00</p>
                            <div className="btn-admin">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Pan de queso</p>
                                <p className="description"></p>
                            </div>
                            <p className="item-price">$0000.00</p>
                            <div className="btn-admin">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Medialunas saladas</p>
                                <p className="description"></p>
                            </div>
                            <p className="item-price">$0000.00</p>
                            <div className="btn-admin">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Sandiwch de pollo</p>
                                <p className="description"></p>
                            </div>
                            <p className="item-price">$0000.00</p>
                            <div className="btn-admin">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                        <div className="menu-item">
                            <div className="item-name">
                                <p className="name">Pizza individual</p>
                                <p className="description"></p>
                            </div>
                            <p className="item-price">$0000.00</p>
                            <div className="btn-admin">
                                <button><FontAwesomeIcon icon={faEdit} /></button>
                                <button><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        </div>
                    </div>
                    <div className="menu-body">
                        {menuItems.map((item, index) => (
                            <div className="menu-item" key={index}>
                                <div className="item-name">
                                    <p className="name">{item.name}</p>
                                    <p className="description">{item.description}</p>
                                </div>
                                <p className="item-price">${item.price}</p>
                                <div className="btn-admin">
                                    <button><FontAwesomeIcon icon={faEdit} /></button>
                                    <button><FontAwesomeIcon icon={faTrash} /></button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="btn-guardar-admin">
                    <button>Guardar <FontAwesomeIcon icon={faSave} /></button>
                </div>
            </div>

        </>
    );
};