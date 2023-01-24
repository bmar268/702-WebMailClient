import { EmailCard } from "..";

export const EmailCardList = () => {
    return(
        <div className="ec-list-wr">
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