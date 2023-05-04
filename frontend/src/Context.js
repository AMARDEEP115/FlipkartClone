import { createContext, useState } from "react";

export const AppContext=createContext();

AppContext.displayName="Created Context";

const AppContextProvider=({Children})=>{
    const [openDrawer,setOpenDrawer]=useState(false);

    return <AppContext.Provider value={{openDrawer,setOpenDrawer}}>
        {Children}
    </AppContext.Provider>
};

export default AppContextProvider;