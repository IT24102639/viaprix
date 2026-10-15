export default function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="76"
      height="53"
      viewBox="0 0 76 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        className="mark-base"
        d="M16.7733 7H0L24.6667 48L37 33.5L16.7733 7Z"
        fill="currentColor"
      />
      <path d="M43.5 6L31 20.5L39 30L60 6H43.5Z" fill="#FF0140" />
      <path d="M39.5 36L26 52H40L47 44.5L39.5 36Z" fill="#FF0140" />
      <path
        d="M50 23L41 33.5L57.5 52.5H72L55.5 33.5L65.5 23H50Z"
        fill="#FF0140"
      />
      <path d="M67.5 6L54 21.5H59.5L71.5 8.5L67.5 6Z" fill="#FF0140" />
      <path
        d="M76 4.25C76 6.59721 73.9853 8.5 71.5 8.5C69.0147 8.5 67 6.59721 67 4.25C67 1.90279 69.0147 0 71.5 0C73.9853 0 76 1.90279 76 4.25Z"
        fill="#FF0140"
      />
    </svg>
  );
}
