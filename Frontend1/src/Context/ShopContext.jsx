import React , { createContext, useEffect, useState }from "react";


export const ShopContext = createContext(null);



const ShopContextProvider = (props) => {
    const [all_product, setAll_product] = useState([]);
    
    
   useEffect(() => {
    fetch('https://beuta-paints-backend.onrender.com/allproducts')
    .then((response)=>response.json())
    .then((data)=>setAll_product(data))


    
   },
    [])

    

    const  contextValue = {all_product};

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
