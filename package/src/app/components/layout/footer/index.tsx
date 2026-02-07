import Link from "next/link";

const Footer = () => {
  return (
    <footer className="-translate-y-px bg-white border-t border-border">
      <div className="container">
        <div className="border-x border-border">
          <div className="max-w-3xl mx-auto  gap-10 sm:gap-16 px-4 sm:px-7 py-4 md:py-7">
            <p>
              2026 © Designed by{" "}
              <Link
                href={"https://shadcnspace.com/"}
                target="_blank"
                className="hover:text-primary"
              >
                shadcnspace.com
              </Link>{" "}
              — All rights reserved{" "}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
