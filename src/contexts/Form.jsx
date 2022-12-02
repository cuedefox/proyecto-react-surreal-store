import { createContext, React, useState } from "react";

export const Formulario = createContext({});

const FormProvider = () => {
    const [data, setData] = useState()
}
return (
    <Formulario.Provider
        value={{
            products,
            addProduct,
            removeProduct,
            emptyCart,
            calculateTotal,
            totalItemsCart,
        }}
    >
        {children}
    </Formulario.Provider>
);