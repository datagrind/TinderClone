import whitelogo from "../images/422-4228522_tinder-logo-svg-hd-png-download.png";
import colorLogo from "../images/422-4228522_tinder-logo-svg-hd-png-download.png";

const Nav = ({ minimal, authToken, setShowModal, showModal, setIsSignUp }) => {
  const handleClick = () => {
    setShowModal(true);
    setIsSignUp(false);
  };
  return (
    <nav>
      <div className="logo-container">
        <img
          src={minimal ? colorLogo : whitelogo}
          alt="logo"
          className="logo"
        />
      </div>
      {!authToken && !minimal && (
        <button
          className="nav-button"
          onClick={handleClick}
          disabled={showModal}
        >
          Log in
        </button>
      )}
    </nav>
  );
};
export default Nav;
