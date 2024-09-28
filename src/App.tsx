import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/styles.css";
import "./styles/app.css";
import { fetchEmailList } from "./redux";
import { EmailBody } from "./components/email-body/EmailBody";
import { EmailCardList } from "./components/email-card-list/EmailCardList";
import { Webchat, WebchatProvider, Fab, getClient } from "@botpress/webchat";
import { buildTheme } from "@botpress/webchat-generator";
import root from "react-shadow";

const { theme, style } = buildTheme({
  themeName: "dawn",
  themeColor: "#ECB7C1",
});

const clientId = "eadb5357-aa8f-4cf1-97b9-32bf71f4ab14";

function App() {
  const [currFilter, setCurrFilter] = useState("");
  const [currPage, setCurrPage] = useState(1);
  const [showEmailBody, setShowEmailBody] = useState({
    show: false,
    emailId: "",
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedFlagOption, setSelectedFlagOption] = useState("On Open");
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [showDelayedChatbot, setShowDelayedChatbot] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  const dispatch = useDispatch();

  const client = getClient({ clientId });
  const [isWebchatOpen, setIsWebchatOpen] = useState(true);

  const toggleWebchat = () => {
    setIsWebchatOpen((prevState) => !prevState);
  };

  useEffect(() => {
    dispatch(fetchEmailList(currPage));
  }, [currPage]);

  useEffect(() => {
    if (selectedFlagOption === "On Hover" && isHoveringLink) {
      setShowChatbot(true);
    }
  }, [selectedFlagOption, isHoveringLink]);

  useEffect(() => {
    setIsWebchatOpen(true);
    let delayTimeout: number | undefined;
    if (selectedFlagOption === "On Delay" && showEmailBody.show) {
      setShowDelayedChatbot(false);
      delayTimeout = setTimeout(() => {
        setShowDelayedChatbot(true);
      }, 10000);
    } else {
      setShowDelayedChatbot(false);
      clearTimeout(delayTimeout);
    }
    return () => clearTimeout(delayTimeout);
  }, [selectedFlagOption, showEmailBody.show, showEmailBody.emailId]);

  useEffect(() => {
    if (selectedFlagOption === "On Hover") {
      setShowChatbot(false);
    }
  }, [selectedFlagOption, showEmailBody.emailId]);

  const handleFlagOptionChange = (option: string) => {
    setSelectedFlagOption(option);
    setIsDropdownOpen(false);
  };

  return (
    <div className="App page-wr u_fx-col">
      <header className="u_fx-row u_fx-js-sb">
        <section className="header-sec u_fx-row u_fx-al-cn">
          <h3>Filter By:</h3>
          <button
            className={`header-btn ${
              currFilter === "UNREAD" ? "header-btn-selected" : ""
            }`}
            onClick={() => setCurrFilter("UNREAD")}
          >
            Unread
          </button>
          <button
            className={`header-btn ${
              currFilter === "READ" ? "header-btn-selected" : ""
            }`}
            onClick={() => setCurrFilter("READ")}
          >
            Read
          </button>
          <button
            className={`header-btn ${
              currFilter === "FAVORITES" ? "header-btn-selected" : ""
            }`}
            onClick={() => setCurrFilter("FAVORITES")}
          >
            Favorites
          </button>
          <button className="header-btn" onClick={() => setCurrFilter("CLEAR")}>
            Clear filter
          </button>
          <div className="dropdown">
            <button
              className="header-btn"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Change Flag
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  className={selectedFlagOption === "On Open" ? "selected" : ""}
                  onClick={() => handleFlagOptionChange("On Open")}
                >
                  On Open
                </li>
                <li
                  className={
                    selectedFlagOption === "On Hover" ? "selected" : ""
                  }
                  onClick={() => handleFlagOptionChange("On Hover")}
                >
                  On Hover
                </li>
                <li
                  className={
                    selectedFlagOption === "Always On" ? "selected" : ""
                  }
                  onClick={() => handleFlagOptionChange("Always On")}
                >
                  Always On
                </li>
                <li
                  className={
                    selectedFlagOption === "On Delay" ? "selected" : ""
                  }
                  onClick={() => handleFlagOptionChange("On Delay")}
                >
                  On Delay
                </li>
              </ul>
            )}
          </div>
        </section>

        <section className="header-sec u_fx-row u_fx-al-cn">
          <h3>Page:</h3>
          <button
            className={`header-btn ${
              currPage === 1 ? "header-btn-selected" : ""
            }`}
            onClick={() => setCurrPage(1)}
          >
            1
          </button>
          <button
            className={`header-btn ${
              currPage === 2 ? "header-btn-selected" : ""
            }`}
            onClick={() => setCurrPage(2)}
          >
            2
          </button>
        </section>
      </header>

      <div
        className={`page-content-wr ${
          showEmailBody.show ? "page-content-grid" : ""
        }`}
      >
        <aside className="aside-ec-list">
          <EmailCardList
            showEmailBody={showEmailBody}
            setShowEmailBody={setShowEmailBody}
            currFilter={currFilter}
          />
        </aside>
        {showEmailBody.show && (
          <main className="main-email-body">
            <EmailBody setIsHoveringLink={setIsHoveringLink} />
          </main>
        )}
      </div>

      {(selectedFlagOption === "Always On" ||
        (selectedFlagOption === "On Open" && showEmailBody.show) ||
        (selectedFlagOption === "On Hover" && showChatbot) ||
        (selectedFlagOption === "On Delay" && showDelayedChatbot)) && (
        <root.div className="chatbot-indicator">
          <style>{style}</style>
          <WebchatProvider theme={theme} client={client}>
            <Fab onClick={toggleWebchat} />
            <div
              style={{
                position: "absolute",
                bottom: "6rem",
                right: "0",
                width: isWebchatOpen ? "350px" : "0",
                height: isWebchatOpen ? "500px" : "0",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
              }}
            >
              <Webchat />
            </div>
          </WebchatProvider>
        </root.div>
      )}
    </div>
  );
}

export default App;
