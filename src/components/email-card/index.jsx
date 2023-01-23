import "./email-card.css";

export const EmailCard = () => {
    return(
        <div className="email-card-wr u_fx-row">
            <div className="avatar u_fx-cn">F</div>
            
            <div className="email-card-content u_fx-col">
                <p>From: <strong><span>Foo Bar</span> <span>&lt;bounced@flipkart.com&gt;</span></strong></p>
                <p>Subject: <strong>Lorem Ipsum</strong></p>
                <p>Aenean ut odio eu risus sollicitudin vehicula volutpat vel ante</p>
                <section className="u_fx-row">
                    <p>26/02/2020 <time>10:30</time>am </p>
                    <p className="email-card-favorite"><strong>Favorite</strong></p>
                </section>
            </div>
        </div>
    );
}