import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { FileText } from "lucide-react";
import Link from "next/link";

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header", className)}>
      <nav className="flex items-center">
        <Link
          href="/"
          className="md:gap-1 md:flex md:items-center hidden"
        >
          <FileText className="h-7 w-7" />
          <span className="font-bold text-lg">{siteConfig.name}</span>
        </Link>
        <Link href="/" className="mr-1 md:hidden">
          <FileText className="h-7 w-7" />
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default Header;
