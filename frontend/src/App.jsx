import axios from "axios";

import { useEffect, useState } from "react";
import "./App.css";

import SubmissionForm from "./components/SubmisionForm.jsx";
import ResidentCard from "./components/ResidentCard.jsx";

import { ToastContainer} from "react-toastify";




function App() {
  const [Residents, setResidents] = useState([]);
  const [toggle,SetToggle] = useState(false);

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
   
  <button id="toggle" onClick={()=>SetToggle(prev=>!prev)}>Add resident</button>
  </div>

</nav>      
  {toggle && (
  <div className="popUp-container" onClick={() => SetToggle(false)}>
    <div className="modal" onClick={(e) => e.stopPropagation()}>
      <SubmissionForm />
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
