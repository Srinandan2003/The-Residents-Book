import { useState } from "react";
import ToggleContext from "./ToggleContext.jsx";


const ToggleProvider = ({children}) =>{
const [toggle, SetToggle] = useState(false);

return (
    <ToggleContext.Provider value={{toggle,SetToggle}}>
        {children}
    </ToggleContext.Provider>
)
}

export default ToggleProvider