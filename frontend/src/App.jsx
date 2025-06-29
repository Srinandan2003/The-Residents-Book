import axios from "axios";

import { useContext, useEffect, useState } from "react";
import "./App.css";

import SubmissionForm from "./components/SubmisionForm.jsx";
import ResidentCard from "./components/ResidentCard.jsx";

import { ToastContainer} from "react-toastify";
import { IoCloseCircle } from "react-icons/io5";

import ToggleContext from "./context/ToggleContext.jsx";



function App() {
  const [Residents, setResidents] = useState([]);
  const {toggle, SetToggle} = useContext(ToggleContext)

  const fetchResidents = async () => {
    try {
      const residents = await axios.get(
        "https://the-residents-book.onrender.com/residents/"
      );
      setResidents(residents.data.result);
    } catch (error) {
      console.log("Error");
    }
  };

  useEffect(() => {
    fetchResidents();
  }, []);

  useEffect(() => console.log(Residents), [Residents]);

  return (
    <>
     <ToastContainer />
    
<nav>
   <h1 className="title">The Residents Book</h1>
  <div id="nav">
   
  <button id="toggle" onClick={()=>SetToggle(prev=>!prev)}>+ Add Resident</button>
  </div>

</nav>      
  {toggle && (
  <div className="popUp-container" onClick={() => SetToggle(false)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <SubmissionForm OnSuccess={fetchResidents}/>
    </div>
  </div>
)}

      <div className="residents-container">
        {Residents.length === 0 ? (
          <p>No residents found.</p>
        ) : (
          Residents.map((resident) => (
            <ResidentCard key={resident._id} resident={resident} />
          ))
        )}
      </div>
     
    </>
  );
}

export default App;
