import Icon from "../Icon/Icon.jsx";
import Button from "../Button/Button.jsx";
import "./EmptyState.css";

// Centered message used for empty lists, errors and 404s (matches the Figma empty state:
// lavender icon in a dark ring, semibold title, small muted text).
export default function EmptyState({ icon = "play-circle", title, children, action, fill = false }) {
  return (
    <div className={`empty ${fill ? "empty--fill" : ""}`} role="status">
      <span className="empty__ring">
        <span className="empty__icon">
          <Icon name={icon} size={24} />
        </span>
      </span>
      <h2 className="empty__title">{title}</h2>
      {children && <p className="empty__text">{children}</p>}
      {action && (
        <div className="empty__action">
          <Button to={action.to} onClick={action.onClick} shadow>
            {action.label}
          </Button>
        </div>
      )}
    </div>
  );
}
