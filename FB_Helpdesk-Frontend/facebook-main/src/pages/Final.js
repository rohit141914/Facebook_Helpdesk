// App.js
import React, { useEffect, useState } from "react";
import "../styles/Final.css";
import Sidebar from "../Components/Side_bar";
import ContactList from "../Components/ContactList";
import MessageContainer from "../Components/Message_container";
import UserProfile from "../Components/User_profile";
import { cookieAlias, getApiUrl } from "../utils/utils";
import { useCookies } from "react-cookie";
import axios from "axios";

const Final = () => {
  const [pages, setPages] = useState([]);
  const [selectedPage, setSelectedPage] = useState({});
  const [selectedContact, setSelectedContact] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [cookie, _] = useCookies();
  const [conversations, setConversations] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    requestPages().then(() => { });
  }, []);

  useEffect(() => {
    if (pages.length == 0) return;
    setSelectedPage(pages[0]);
  }, [pages]);

  useEffect(() => {
    if (!selectedPage || !selectedPage.id) return;
    axios
      .get(getApiUrl() + "/get_conversations", {
        params: {
          pageId: selectedPage.id,
          pageAccessToken: selectedPage.accessToken,
        },
      })
      .then((res) => {
        setConversations(res.data.conversations);
      });
  }, [selectedPage, setConversations]);

  useEffect(() => {
    let contacts = [];
    if (!conversations || conversations.length === 0) return;
    for (let conv of conversations) {
      conv.messages.reverse();
      let contact = {
        id: conv.senderId,
        name: conv.senderName,
        message: conv.messages[conv.messages.length - 1],
      };
      contacts.push(contact);
    }
    setContacts(contacts);
    setSelectedContact(0);
  }, [conversations, setContacts, setSelectedContact]);

  useEffect(() => {
    let conv = conversations[selectedContact];
    if (conv === undefined) return;
    setProfile({
      name: conv.senderName,
      email: conv.senderEmail,
    });
    setLoaded(true);
  }, [selectedContact, conversations, setLoaded]);

  const requestPages = async () => {
    if (pages.length != 0) return;
    const url = getApiUrl() + `/get_pages`;
    const res = await axios.get(url, {
      params: {
        userId: cookie[cookieAlias.facebookId],
        accessToken: cookie[cookieAlias.accessToken],
      },
    });
    setPages(res.data.pages);
  };

  const onContactClick = (idx) => {
    setSelectedContact(idx);
  };

  const onMessageSend = (content) => {
    if (!content) return;
    const body = {
      pageId: selectedPage.id,
      recepientId: conversations[selectedContact].senderId,
      content: content,
      pageAccessToken: selectedPage.accessToken,
    };
    console.log(body);
    setConversations((prev) => {
      const message = {
        time: new Date().toUTCString(),
        content: content,
        recieved: false,
        messageId: new Date().toUTCString(),
      };
      prev[selectedContact].messages.push(message);
      return prev;
    });
    axios.post(getApiUrl() + "/send_message", body).then((res) => {
      console.log(res);
    });
  };

  return loaded &&
    pages.length > 0 &&
    selectedPage != undefined &&
    conversations.length != 0 &&
    profile.name ? (
    <div className="columns-container">
      <Sidebar />
      <ContactList
        selectedPage={selectedPage}
        contacts={contacts}
        onContactClick={onContactClick}
        selectedIdx={selectedContact}
      />
      <MessageContainer
        name={conversations[selectedContact].senderName}
        messages={conversations[selectedContact].messages}
        onMessageSend={onMessageSend}
      />
      <UserProfile profile={profile} />
    </div>
  ) : loaded ? (
    <h1>No Pages Found</h1>
  ) : (
    <h4>Loding pages...</h4>
  );
};

export default Final;
