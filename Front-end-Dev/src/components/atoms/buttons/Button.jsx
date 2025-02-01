function Button({
  text,
  showicon,
  showiconTwo,
  className,
  showiconThree,
  type,
  disabled,
  onClick,
}) {
  return (
    <>
      <button
        className={className}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {showicon && <i className="fa fa-upload mr-2"></i>}
        {showiconTwo && <i className="fa fa-play"></i>}
        {text}
        {showiconThree && (
          <>
            <i className="fa fa-chevron-right ml-2"></i>
            <i className="fa fa-chevron-right"></i>
          </>
        )}
      </button>
    </>
  );
}

export default Button;
