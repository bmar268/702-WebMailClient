import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./styles/styles.css";
import "./styles/app.css";
import { fetchEmailList } from "./redux";
import { EmailBody } from "./components/email-body/EmailBody";
import { EmailCardList } from "./components/email-card-list/EmailCardList";

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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEmailList(currPage));
  }, [currPage]);

  useEffect(() => {
    let delayTimeout;
    if (selectedFlagOption === "On Delay" && showEmailBody.show) {
      delayTimeout = setTimeout(() => {
        setShowDelayedChatbot(true);
      }, 10000);
    } else {
      setShowDelayedChatbot(false);
      clearTimeout(delayTimeout);
    }
    return () => clearTimeout(delayTimeout);
  }, [selectedFlagOption, showEmailBody.show]);

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
        (selectedFlagOption === "On Hover" && isHoveringLink) ||
        (selectedFlagOption === "On Delay" && showDelayedChatbot)) && (
        <div className="chatbot-indicator">chatbot</div>
      )}
    </div>
  );
}

export default App;
