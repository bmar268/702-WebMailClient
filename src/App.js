import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { EmailCardList, EmailBody } from "./components";
import { fetchEmailList } from "./redux";
import "./styles/styles.css"
import "./styles/app.css"

function App() {
    const [currFilter, setCurrFilter] = useState("");
    const [currPage, setCurrPage] = useState(1);
    const [showEmailBody, setShowEmailBody] = useState({ show: false, emailId: ""});

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmailList(currPage));
    }, [currPage]);

    return (
        <div className="App page-wr u_fx-col">
            <header className="u_fx-row u_fx-js-sb">
                <section className="header-sec u_fx-row u_fx-al-cn">
                    <h3>Filter By:</h3>
                    <button 
                        className={`header-btn ${currFilter === "UNREAD" ? "header-btn-selected" : ""}`}
                        onClick={() => setCurrFilter("UNREAD")}
                    >
                        Unread
                    </button>
                    <button 
                        className={`header-btn ${currFilter === "READ" ? "header-btn-selected" : ""}`}
                        onClick={() => setCurrFilter("READ")}
                    >
                        Read
                    </button>
                    <button 
                        className={`header-btn ${currFilter === "FAVORITES" ? "header-btn-selected" : ""}`}
                        onClick={() => setCurrFilter("FAVORITES")}
                    >
                        Favorites
                    </button>
                    <button 
                        className="header-btn"
                        onClick={() => setCurrFilter("CLEAR")}
                    >
                        Clear filter
                    </button>
                </section>

                <section className="header-sec u_fx-row u_fx-al-cn">
                    <h3>Page:</h3>  
                    <button 
                        className={`header-btn ${currPage === 1 ? "header-btn-selected" : ""}`}
                        onClick={() => setCurrPage(1)}
                    >1</button>
                    <button 
                        className={`header-btn ${currPage === 2 ? "header-btn-selected" : ""}`}
                        onClick={() => setCurrPage(2)}
                    >2</button>
                </section>
            </header>

            <div className={`page-content-wr ${showEmailBody.show ? "page-content-grid" : ""}`}>
                <aside className="aside-ec-list">
                    <EmailCardList 
                        showEmailBody={showEmailBody}
                        setShowEmailBody={setShowEmailBody}
                        currFilter={currFilter}
                    />
                </aside>
                {
                    showEmailBody.show &&
                    <main className="main-email-body">
                        <EmailBody />
                    </main>
                }
            </div>
        </div>
    );
}

export default App;