import "../styles/Final.css";
import { FaInbox } from "react-icons/fa";
import { SiUbuntu } from "react-icons/si";
import { MdPeopleAlt } from "react-icons/md";
import { AiOutlineStock } from "react-icons/ai";
function Sidebar() {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  return (
    <div className="column" id="column1">
      <div className="colums1-div">
        <div style={{ fontSize: "2em", margin: "1em 0" }}>
          <a href="#blank">
            <SiUbuntu></SiUbuntu>
          </a>
        </div>
        <div style={{ fontSize: "2em", margin: "1em 0" }}>
          <a href="#blank">
            {" "}
            <FaInbox></FaInbox>
          </a>
        </div>
        <div style={{ fontSize: "2em", margin: "1em 0" }}>
          <a href="#blank">
            {" "}
            <MdPeopleAlt></MdPeopleAlt>
          </a>
        </div>
        <div style={{ fontSize: "2em", margin: "1em 0" }}>
          <a href="#blank">
            {" "}
            <AiOutlineStock></AiOutlineStock>
          </a>
        </div>
      </div>

      <div
        style={{
          fontSize: "2em",
          margin: "1em 0",
        }}
      >
        <img
          src={imageUrl}
          alt="User Avatar"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "white",
            padding: "4px",
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
