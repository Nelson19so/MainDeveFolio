export default function Itemheader({ text, textTwo, className }) {
  return (
    <>
      <div className="header-">
        <span>
          <span className="text-muted">{textTwo}</span>
          <h1 className={className}>{text}</h1>
        </span>
      </div>
    </>
  );
}
