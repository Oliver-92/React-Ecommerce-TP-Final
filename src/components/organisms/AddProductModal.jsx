import { useState } from "react";
import { SweetBasic } from "../../utility/sweetAlert";
// AddProductModal: Organismo que muestra el formulario modal para agregar un nuevo producto.

const AddProductModal = ({ isOpen, onClose, onSubmit }) => {
    const [form, setForm] = useState({
        name: "",
        image: "",
        description: "",
        price: "",
        stock: ""
    });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = () => {

        // Validación campo por campo
        if (
            !form.name.trim() ||
            !form.image.trim() ||
            !form.description.trim() ||
            !form.price ||
            !form.stock
        ) {
            SweetBasic("Error", "Por favor, completa todos los campos.", "error", "Aceptar");
            return;
        }

        if (form.description.trim().length < 10) {
            SweetBasic("Error", "La descripción debe tener al menos 10 caracteres.", "error", "Aceptar");
            return;
        }

        if (Number(form.price) <= 0 || Number(form.stock) <= 0) {
            SweetBasic("Error", "El precio y el stock deben ser mayores a 0.", "error", "Aceptar");
            return;
        }

        // Enviar datos si pasa todas las validaciones
        onSubmit(form);
        setForm({
            name: "",
            image: "",
            description: "",
            price: "",
            stock: ""
        });
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-xl z-50">
            <div className="flex flex-col gap-2 bg-white border-1 border-gray-200 rounded-xl p-6 w-[90%] max-w-lg shadow-md">
                <h2 className="text-xl font-mono font-semibold mb-4">Agregar nuevo producto</h2>
                <input
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required
                    type="text" />
                <input
                    name="image"
                    placeholder="Imagen (URL)"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required
                    type="url" />
                <textarea
                    name="description"
                    placeholder="Descripción"
                    onChange={handleChange}
                    minLength={10}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required />
                <input
                    name="price"
                    placeholder="Precio"
                    type="number"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required />
                <input
                    name="stock"
                    placeholder="Stock"
                    type="number"
                    onChange={handleChange}
                    className="input-style border-1 border-gray-400 p-1 rounded-xl"
                    required />

                <div className="flex justify-end mt-4 gap-2">
                    <button onClick={onClose} className="px-3 py-1 bg-gray-300 rounded-2xl cursor-pointer hover:bg-gray-400">Cancelar</button>
                    <button onClick={handleSubmit} className="px-3 py-1 bg-blue-600 cursor-pointer text-white rounded-2xl hover:bg-blue-700">Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default AddProductModal;