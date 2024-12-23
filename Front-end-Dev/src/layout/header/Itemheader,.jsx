export default function Itemheader({ text, textTwo, className }) {
  return (
    <>
      <div>
        <span>
          <span className="text-muted">{textTwo}</span>
          <h3 className={className}>{text}</h3>
        </span>
      </div>
    </>
  );
}
