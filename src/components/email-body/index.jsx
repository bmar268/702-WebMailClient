import "../components-utility.css";
import "./email-body.css";

export const EmailBody = () => {
    return(
        <div className="email-body-wr c_email-wr u_fx-row">
            <div className="c_avatar u_fx-cn">F</div>

            <div className="email-body u_fx-col">
                <header className="email-body-header u_fx-row u_fx-js-sb u_fx-al-cn">
                    <h1 className="email-body-subject">Lorem Ipsum</h1>
                    <button className="email-body-btn">Mark as favorite</button>
                </header>

                <section className="u_fx-row">
                    <p><span>20/12/2020</span> <time>11:11</time></p>
                    <p className="c_email-favorite">Favorite</p>
                </section>

                <section className="email-body-content">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porta, lorem et suscipit congue, ipsum tellus dictum nisi, at porta risus ipsum quis nisi. Sed commodo lectus eget gravida lacinia. Phasellus scelerisque semper neque, accumsan finibus nisi eleifend sollicitudin. Fusce vel velit tortor. Quisque maximus consequat urna. Nam eleifend fermentum tristique. Etiam a augue finibus, aliquam neque sed, sollicitudin leo. Aliquam lacinia finibus finibus. Nunc tristique libero ut porttitor efficitur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis dui non pellentesque tempus. Praesent odio odio, euismod ut turpis quis, porttitor maximus ante. Donec varius orci arcu, feugiat imperdiet turpis euismod in.</p>
                    <p>Mauris feugiat dui dolor, cursus tempor lectus tincidunt nec. Nullam dictum porttitor nibh, vitae venenatis ligula faucibus ac. Morbi interdum et ipsum eget aliquam. Maecenas scelerisque, massa vitae convallis malesuada, nisi orci ultricies magna, non efficitur dolor magna in lorem. Ut bibendum mauris at turpis dictum, vitae fermentum dolor feugiat. In accumsan rutrum aliquam. Duis sed nisl elit.</p>
                    <p>Quisque laoreet tortor et mauris consectetur vehicula. Curabitur ut finibus ex. Curabitur sem est, malesuada vulputate lectus at, vestibulum tincidunt arcu. Donec eu volutpat lacus. Donec sit amet enim tincidunt, elementum lectus at, vestibulum sapien. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras mauris diam, sagittis non accumsan ut, sollicitudin sit amet ligula. Fusce aliquet eleifend luctus. Morbi ac ex nunc. Curabitur scelerisque leo vitae aliquet facilisis. Phasellus faucibus metus dolor, id consectetur magna convallis nec.</p>
                </section>
            </div>
        </div>
    );
}