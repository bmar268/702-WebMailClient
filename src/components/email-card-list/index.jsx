import { useDispatch, useSelector } from "react-redux";
import { fetchEmailBody, setEmailDetails } from "../../redux/features/data/bodyDataSlice";
import { EmailCard } from "..";
import "./email-card-list.css"
import { getDateTimeFormat } from "../../helper-functions/get-datetime-format";
import { addToRead } from "../../redux/features/data/listDataSlice";

export const EmailCardList = ({ showEmailBody, setShowEmailBody }) => {
    const { show, emailId } = showEmailBody;
    const { listLoading, listLoadingError, emailList } = useSelector((state) => state.emailList);
    const dispatch = useDispatch();

    const emailCardClickHandler = (id, name, date, subject) => {
        if (show && emailId === id) {
            return setShowEmailBody({ show: false, emailId: ""});
        } 
        
        setShowEmailBody({ show: true, emailId: id});
        
        dispatch(addToRead(id));
        dispatch(setEmailDetails({ 
            initial: name[0].toUpperCase(),
            subject: subject,
            date: getDateTimeFormat(date),
        }))
        dispatch(fetchEmailBody(id));
    }

    return(
        <div className="ec-list-wr u_fx-col">
            {listLoading && <p>Loading mails...</p>}
            {listLoadingError && <p>Unable to load emails.</p>}

            {
                emailList.length > 0 && !listLoading && 
                emailList?.map((currEmail) => {
                    const { id, from, date, subject } = currEmail;
                    return(
                        <EmailCard 
                            key={id} 
                            currEmail={currEmail}
                            onClick={() => emailCardClickHandler(id, from.name, date, subject)}
                        />  
                    );
                })
            }
        </div>
    );
}