import { Link } from 'react-router-dom';

const links = [
  { title: 'Refund Policy', href: '/refund-policy' },
  { title: 'Privacy Policy', href: '/privacy-policy' },
  { title: 'Terms & Conditions', href: '/terms-and-conditions' },
];

export const Footer = () => {
  return (
    <footer className="border-t bg-white py-4 dark:bg-transparent">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          {/* Links */}
          <div className="flex flex-col items-center gap-2 text-sm md:flex-row md:gap-6">
            {links.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="text-muted-foreground hover:text-primary duration-150"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <span className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} E-Invyt, All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
