import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const ResidentCard = ({ resident }) => {
  return (
    <div className="resident-card">
      <img
        src={resident.ProfilePhoto}
        alt={`${resident.FirstName} ${resident.LastName}`}
        width="100"
      />
      <hr />
      <h3>{resident.FirstName} {resident.LastName}</h3>
      <p><strong>Role:</strong> {resident.Role}</p>
      {resident.LinkedIn && (
        <p>
          <a href={resident.LinkedIn} target="_blank" rel="noreferrer">Twitter<FaTwitter /></a>
        </p>
      )}
      {resident.Twitter && (
        <p>
          <a href={resident.Twitter} target="_blank" rel="noreferrer">LinkedIn<FaLinkedin /></a>
        </p>
      )}
    </div>
  );
};

export default ResidentCard;
