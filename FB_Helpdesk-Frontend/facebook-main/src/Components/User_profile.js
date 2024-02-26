import "../styles/Final.css";
import { CgProfile } from "react-icons/cg";

const AvatarCard = (props) => {
  const imageUrl =
    "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png";
  return (
    <div
      className="card"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div className="avatar">
        <img src={imageUrl} alt="User Avatar" />
        <span>{props.name}</span>
      </div>
      <div>
        <button className="btn">
          {" "}
          <span style={{ marginTop: "2px", color: "black" }}>
            <CgProfile style={{ width: "20px", height: "20px " }}></CgProfile>
          </span>
          <span style={{ color: "black" }}> Profile</span>
        </button>
      </div>
    </div>
  );
};

const CustomerDetailsCard = (props) => (
  <div
    className="card"
    style={{
      display: "flex",
      flexDirection: "column",
      padding: "1em",
      paddingTop: "0em",
      margin: "11px",
    }}
  >
    <h3>Customer Details</h3>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{`Email:`}</span>
      <span style={{ fontWeight: "700" }}>{props.email}</span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{`First Name:`}</span>
      <span style={{ fontWeight: "700" }}>{props.firstName}</span>
    </div>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{`Last Name:`}</span>
      <span style={{ fontWeight: "700" }}>{props.lastName}</span>
    </div>
    <a
      href="#blank"
      style={{
        margin: "0.5em 0",
        textDecoration: "none",
        fontWeight: "700",
      }}
    >
      View More Details
    </a>
  </div>
);
function UserProfile(props) {
  return (
    <div className="column" id="column4">
      <AvatarCard name={props.profile.name} />
      <CustomerDetailsCard
        email={props.profile.email}
        firstName={props.profile.name.split(" ")[0]}
        lastName={props.profile.name.split(" ").pop()}
      />
    </div>
  );
}

export default UserProfile;
