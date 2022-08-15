const AuthModal = ({ setShowModal }) => {
  const handleClick = () => {
    setShowModal(false);
  };

  const isSignUp = true;

  return (
    <div className="auth-modal">
      <div className="auth-x" onClick={handleClick}>
        {" "}
        ⨂
      </div>
      <h2>{isSignUp ? "Create Account" : "LOG IN"}</h2>
      <p></p>
      AUTH MODAL
    </div>
  );
};

export default AuthModal;
