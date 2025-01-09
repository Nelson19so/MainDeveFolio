export default function Input({
  type,
  placeholder,
  className,
  maxLength,
  onChange,
  value,
  checked,
}) {
  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onChange={onChange}
        maxLength={maxLength}
        value={value}
        checked={checked}
      />
    </>
  );
}
