import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mt-4">
      <div className="logo">
        <Link href={"/"} className="inline-block">
          <h1 className="font-extrabold text-foreground text-lg md:text-xl flex items-center gap-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-terminal  scale-x-[-1]"
            >
              <polyline points="4 17 10 11 4 5"></polyline>
              <line x1="12" x2="20" y1="19" y2="19"></line>
            </svg>
            Dev By Talib
          </h1>
        </Link>
      </div>
    </nav>
  );
}
