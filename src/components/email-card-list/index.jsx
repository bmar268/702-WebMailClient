import { EmailCard } from "..";
import "./email-card-list.css"

export const EmailCardList = () => {
    return(
        <div className="ec-list-wr u_fx-col">
        {
            Array(15).fill(0).map((item, id) => {
                return(
                  <EmailCard key={id} />  
                );
            })
        }
        </div>
    );
}