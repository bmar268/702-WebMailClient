import { EmailCard } from "./components/email-card";
import { EmailBody, EmailCardList } from "./components";
import "./styles/styles.css"
import "./styles/app.css"
import { useState } from "react";

function App() {
    const [showEmailBody, setShowEmailBody] = useState(false);

    return (
        <div className="App page-wr u_fx-col">
            <header className="filter-wr u_fx-row u_fx-al-cn">
                <h3 className="filter-heading">Filter By:</h3>
                <button className="filter-btn">Unread</button>
                <button className="filter-btn">Read</button>
                <button className="filter-btn">Favorites</button>
            </header>
            <div className="page-content-wr page-content-grid">
                <aside className="aside-ec-list">
                    <EmailCardList />
                </aside>
                <main className="main-email-body email-body-hide email-body-visible">
                    <EmailBody />
                </main>

            </div>
        </div>
    );
}

export default App;
