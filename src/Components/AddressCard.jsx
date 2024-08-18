import React,{useState} from "react";
import Heart from "react-animated-heart";


const AddressCard = ({address}) => {
  const [isClick, setClick] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails)
  }

  return (
    <div>
      <h2>{address.name?.first} {address.name?.last}</h2>
      <img src={address.picture?.large}/>
      <button onClick={toggleDetails}>
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails && (
    
        <div>
          <p>{address.phone}</p>
          <p>{address.location?.street?.name} {address.location?.city}</p>
          <p>{address.location?.state || "N/A"}</p>
        </div>
      )}
      
      
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />

    </div>
  );
};

export default AddressCard;