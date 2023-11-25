import Link from "next/link";

export interface LinkButtonProps extends React.ComponentPropsWithoutRef<"a"> {
  href: string;
  hoverClass: string;
}

export function LinkButton({
  children,
  className,
  href,
  hoverClass,
  ...props
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`font-dekko h-full rounded-full shadow-sm relative inline-flex items-center justify-center overflow-hidden font-medium transition duration-300 ease-out group ${className}`}
      {...props}
    >
      <span
        className={`absolute inset-0 flex items-center justify-center w-full h-full duration-300 -translate-x-full group-hover:translate-x-0 ease ${hoverClass}`}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          ></path>
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full transition-all duration-300 transform group-hover:translate-x-full ease">
        {children}
      </span>
      <span className="relative invisible">{children}</span>
    </Link>
  );
}
