import { useDispatch, useSelector } from "react-redux";
import parse from "html-react-parser";
import { addToFavorites, removeFromFavorites } from "../../redux";
import "../components-utility.css";
import "./email-body.css";
import { useEffect, useState } from "react";

export const EmailBody = ({ setIsHoveringLink }) => {
  const {
    bodyLoading,
    bodyLoadingError,
    emailBody: { id, body },
    initial,
    subject,
    date,
  } = useSelector((state) => state.emailBody);
  const { favorites } = useSelector((state) => state.emailList);
  const dispatch = useDispatch();

  const bodyContent = body ? parse(body) : "";

  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as HTMLElement).tagName === 'A') {
        const timeout = setTimeout(() => {
          setIsHoveringLink(true);
        }, 200);
        setHoverTimeout(timeout);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if ((event.target as HTMLElement).tagName === 'A') {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
          setHoverTimeout(null);
        }
        setIsHoveringLink(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [setIsHoveringLink, hoverTimeout]);

  return bodyLoading ? (
    <p>Loading email contents...</p>
  ) : bodyLoadingError ? (
    <p>Unable to fetch email contents.</p>
  ) : (
    <div className="email-body-wr c_email-wr u_fx-row">
      <div className="c_avatar u_fx-cn">{initial}</div>

      <div className="email-body u_fx-col">
        <header className="email-body-header u_fx-row u_fx-js-sb u_fx-al-cn">
          <h1 className="email-body-subject">{subject}</h1>
          {favorites.includes(id) ? (
            <button
              className="email-body-btn"
              onClick={() => dispatch(removeFromFavorites(id))}
            >
              Remove from favorite
            </button>
          ) : (
            <button
              className="email-body-btn"
              onClick={() => dispatch(addToFavorites(id))}
            >
              Mark as favorite
            </button>
          )}
        </header>

        <section className="u_fx-row">
          <p>{date}</p>
          {favorites.includes(id) && (
            <p className="c_email-favorite">Favorite</p>
          )}
        </section>

        <section
          className="email-body-content"
        >
          {bodyContent}
        </section>
      </div>
    </div>
  );
};