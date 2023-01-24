import { getDateTimeFormat } from "../../helper-functions/get-datetime-format";
import "../components-utility.css";
import "./email-card.css";

export const EmailCard = ({ currEmail, onClick }) => {
    const { from, date, subject, short_description } = currEmail;
    const { name, email } = from;

    const initial = name[0].toUpperCase()
    const formattedDate = getDateTimeFormat(date);
    
    return(
        <div 
            className="email-card-wr c_email-wr u_fx-row"
            onClick={onClick}
        >
            <div className="c_avatar u_fx-cn">{initial}</div>
            
            <div className="email-card-content u_fx-col">
                <p>From: <strong><span>{name}</span> <span>&lt;{email}&gt;</span></strong></p>
                <p>Subject: <strong>{subject}</strong></p>
                <p>{short_description}</p>
                <section className="u_fx-row">
                    <p>{formattedDate}</p>
                    {/* <p className="c_email-favorite"><strong>Favorite</strong></p> */}
                </section>
            </div>
        </div>
    );
}