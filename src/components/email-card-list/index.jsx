import { EmailCard } from "..";
import "./email-card-list.css"
import { useSelector } from "react-redux";

export const EmailCardList = () => {
    const { loading, emailList } = useSelector((state) => state.emailList);

    return(
        <div className="ec-list-wr u_fx-col">
        {
            loading &&
            <p>Loading mails...</p>
        }
        {
            emailList.length > 0 && !loading && 
            emailList?.map((currEmail) => {
                return(
                    <EmailCard 
                        key={currEmail.id} 
                        currEmail={currEmail}
                    />  
                );
            })
        }
        </div>
    );
}