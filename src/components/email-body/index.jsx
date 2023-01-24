import { useSelector } from "react-redux";
import "../components-utility.css";
import "./email-body.css";
import parse from "html-react-parser";

export const EmailBody = () => {
    const { 
        bodyLoading, 
        bodyLoadingError, 
        emailBody,
        initial,
        subject,
        date
    } = useSelector((state) => state.emailBody);
    const { id, body } = emailBody;

    const bodyContent = body ? parse(body) : "";

    return(
        bodyLoading ? (
            <p>Loading email contents...</p>
        ) : (
            bodyLoadingError ?
            <p>Unable to fetch email contents.</p> :
            <div className="email-body-wr c_email-wr u_fx-row">
                <div className="c_avatar u_fx-cn">{initial}</div>
                
                <div className="email-body u_fx-col">
                    <header className="email-body-header u_fx-row u_fx-js-sb u_fx-al-cn">
                        <h1 className="email-body-subject">{subject}</h1>
                        <button className="email-body-btn">Mark as favorite</button>
                    </header>

                    <section className="u_fx-row">
                        <p>{date}</p>
                        <p className="c_email-favorite">Favorite</p>
                    </section>

                    <section className="email-body-content">
                        {bodyContent}
                    </section>
                </div>
            </div>
        )
        
    );
}