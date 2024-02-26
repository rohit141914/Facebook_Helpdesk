import "../styles/Final.css";
import { IoMdRefresh } from "react-icons/io";
import { HiMenuAlt1 } from "react-icons/hi";
import { getDateDiff } from "../utils/utils";

const ContactCard = (props) => {
  const onClick = () => props.onClick(props.ind);

  return (
    <div
      onClick={onClick}
      className={`contact-card ${props.selected ? "selected" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        borderBottom: "1px solid rgb(182, 182, 182)",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <input type="checkbox" />
        <label
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span
              style={{ fontSize: "1.3em", color: "black", fontWeight: "700" }}
            >
              {props.data.name}
            </span>
            <span style={{ fontSize: "0.8em" }}>Facebook</span>
          </div>
          <div>
            <span style={{ fontSize: "0.8em" }}>
              {getDateDiff(props.data.message.time)}
            </span>
          </div>
        </label>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
        }}
      >
        <p
          style={{
            fontSize: "0.9em",
            fontWeight: "700",
            padding: "0",
            marginTop: ".5em",
            marginBottom: ".1em",
          }}
        >
          {props.data.message.content}
        </p>
      </div>
    </div>
  );
};

function ContactList(props) {
  const onContactClick = (idx) => {
    props.onContactClick(idx);
  };

  return (
    <div className="column" id="column2">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          borderBottom: "1px solid rgb(182, 182, 182)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div style={{ margin: "0 0.5em" }}>
            <a href="#blank">
              <HiMenuAlt1></HiMenuAlt1>
            </a>
          </div>
          <p
            style={{ fontWeight: "500", fontSize: "1.4em", textAlign: "left" }}
          >
            {props.selectedPage.name}
          </p>
        </div>
        <div>
          <a href="#blank">
            <IoMdRefresh />
          </a>
        </div>
      </div>
      <div className="card" style={{ width: "100%", boxSizing: "border-box" }}>
        {props.contacts.map((val, idx) => (
          <ContactCard
            key={idx}
            ind={idx}
            data={val}
            onClick={onContactClick}
            selected={idx === props.selectedIdx}
          />
        ))}
      </div>
    </div>
  );
}

export default ContactList;
