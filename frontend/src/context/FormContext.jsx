import { createContext, useState, useContext } from "react";

const FormContext = createContext();

const FormContextProvider = ({ children }) => {
  const [toggle, SetToggle] = useState(false);

  return (
       <FormContext.Provider value={{ toggle, SetToggle }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => useContext(FormContext);
export default FormContextProvider;
