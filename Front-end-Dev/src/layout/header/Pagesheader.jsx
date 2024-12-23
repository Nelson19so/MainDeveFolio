export default function Pagesheader({
  subtitle,
  title,
  classNameSubtitle,
  classNameTitle,
}) {
  return (
    <>
      <div className="container-header mb-5 w-100">
        <article>
          <p className={classNameSubtitle}>
            <span>||</span>
            <span className="ml-2">{subtitle}</span>
          </p>
          <h1 className={classNameTitle}>{title}</h1>
        </article>
      </div>
    </>
  );
}
