import { createContext, useState, useContext } from 'react';
// ProductsContext: contexto que se utiliza para gestionar la lista de productos de la aplicación.

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [refreshProducts, setRefreshProducts] = useState(false);


    const fetchProducts = () => {
        return new Promise((resolve, reject) => {
            fetch('https://6827a00a6b7628c52910f842.mockapi.io/data')
                .then((res) => res.json())
                .then((data) => {
                    setProducts(data);
                    resolve(data);
                })
                .catch((error) => {
                    console.error("Hubo un problema al cargar los productos:", error);
                    reject(error);
                });
        });
    };

    const triggerRefresh = () => setRefreshProducts(prev => !prev);

    const fetchProductById = (id) => {
        return new Promise((resolve, reject) => {
            fetch(`https://6827a00a6b7628c52910f842.mockapi.io/data/${id}`)
                .then((res) => res.json())
                .then((product) => {
                    setSelectedProduct(product);
                    resolve(product);
                })
                .catch((error) => {
                    console.error("Hubo un problema al cargar los productos:", error);
                    reject(error);
                });
        });
    };

    const addProduct = (product) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch('https://6827a00a6b7628c52910f842.mockapi.io/data', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(product),
                });
                if (!response.ok) throw new Error('Hubo un problema al agregar el producto');
                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error(error.message);
                reject(error);
            }
        });
    };

    const updateProduct = (product) => {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`https://6827a00a6b7628c52910f842.mockapi.io/data/${product.id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(product),
                });
                if (!response.ok) throw new Error('Hubo un problema al actualizar el producto');
                const data = await response.json();
                resolve(data);
            } catch (error) {
                console.error(error.message);
                reject(error);
            }
        });
    };

    const deleteProduct = (id) => {

        return new Promise(async (resolve, reject) => {
            try {
                const response = await fetch(`https://6827a00a6b7628c52910f842.mockapi.io/data/${id}`, {
                    method: 'DELETE',
                });
                if (!response.ok) throw new Error('Hubo un problema al eliminar el producto');
                resolve();
            } catch (error) {
                console.error(error.message);
                reject(error);
            }
        });
    };

    return (
        <ProductsContext.Provider
            value={{
                products,
                selectedProduct,
                refreshProducts,
                triggerRefresh,
                setSelectedProduct,
                fetchProducts,
                fetchProductById,
                addProduct,
                updateProduct,
                deleteProduct,
            }}
        >
            {children}
        </ProductsContext.Provider>
    );
}

export const useProductsContext = () => useContext(ProductsContext);