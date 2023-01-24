import { EmailCardList } from "./components";
import "./styles/styles.css"
import "./styles/app.css"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchEmailList } from "./redux/features/data/listDataSlice";

function App() {
    const [currPage, setCurrPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmailList(currPage));
    }, [currPage]);

    return (
        <div className="App page-wr u_fx-col">
            <header className="u_fx-row u_fx-js-sb">
                <section className="filter-wr u_fx-row u_fx-al-cn">
                    <h3 className="filter-heading">Filter By:</h3>
                    <button className="filter-btn">Unread</button>
                    <button className="filter-btn">Read</button>
                    <button className="filter-btn">Favorites</button>
                </section>
                <section className="filter-wr u_fx-row u_fx-al-cn">
                    <h3 className="filter-heading">Page:</h3>  
                    <button 
                        className="filter-btn"
                        onClick={() => setCurrPage(1)}
                    >1</button>
                    <button 
                        className="filter-btn"
                        onClick={() => setCurrPage(2)}
                    >2</button>
                </section>
            </header>
            <div className="page-content-wr">
                <aside className="aside-ec-list">
                    <EmailCardList />
                </aside>
                {/* <main className="main-email-body email-body-hide email-body-visible">
                    <EmailBody />
                </main> */}

            </div>
        </div>
    );
}

export default App;
