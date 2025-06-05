import { useContext, useState } from "react";
import axios from 'axios';
import '../App.css'
import ToggleContext from "../context/ToggleContext.jsx";

import { toast } from "react-toastify";
const SubmissionForm = ({OnSuccess}) => {
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    Role: '',
    ProfilePhoto: '',
    LinkedIn: '',
    Twitter: ''
  });
  const [loading,setLoading] = useState(false);
  const {SetToggle}= useContext(ToggleContext);
  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "residents_preset"); 

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dng7g5pey/image/upload", 
        data
      );
      setFormData({ ...formData, ProfilePhoto: res.data.secure_url });
    
    } catch (err) {
     
      console.error("Cloudinary Upload Error:", err);
        toast.error(`Error while Uploading: ${err.message}`);
        
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    setLoading(true)
    try {
      const Resident = await axios.post(
        'https://the-residents-book.onrender.com/residents/Add-Resident',
        formData
      );
      setLoading(false)
      toast.success("Resident added successfully!");
       SetToggle(prev =>!prev)
       OnSuccess()
    } catch (error) {
        setLoading(false)
      console.error(error);
      if(error.response?.data?.message == "Incomplete data"){
 toast.error(`Error while submitting data: ${error.response?.data?.message || error.message}`);
      }else{
         toast.error(`Error while submitting data: ${error.response?.data?.message || error.message}`);
         SetToggle(prev =>!prev)
      }
       
      
      
    }
  };

  return (
    <div>
      <form id="SubmissionForm" onSubmit={handleSubmit}>
        <label htmlFor="FirstName">FirstName :</label>
        <input type="text" name="FirstName" placeholder="FirstName" onChange={handleChange} />

        <label htmlFor="LastName">LastName :</label>
        <input type="text" name="LastName" placeholder="LastName" onChange={handleChange} />

        <label htmlFor="Email">Email :</label>
        <input type="email" name="Email" placeholder="Email" onChange={handleChange} />

        <label htmlFor="Role">Role :</label>
        <input type="text" name="Role" placeholder="Role" onChange={handleChange} />

        <label htmlFor="ProfilePhoto">ProfilePhoto:</label>
        <input type="file" accept="image/*" onChange={handleImageUpload} />

        <label htmlFor="LinkedIn">LinkedIn :</label>
        <input type="text" name="LinkedIn" placeholder="LinkedIn" onChange={handleChange} />

        <label htmlFor="Twitter">Twitter :</label>
        <input type="text" name="Twitter" placeholder="Twitter" onChange={handleChange} />

   <button type="submit" id="formButton">{loading?"Loading...":"Submit"}</button>
      </form>
    </div>
  );
};

export default SubmissionForm;
