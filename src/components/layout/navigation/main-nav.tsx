// next
import Link from "next/link";

// helpers
import { classnames } from "@/common/helpers";

// data
import { navigation } from "@/common/data";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={classnames(
        "flex items-center space-x-4 lg:space-x-6",
        className
      )}
      {...props}
    >
      {navigation.map(({ label, path }, index) => (
        <Link
          key={index}
          href={path}
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          {label}
        </Link>
      ))}
    </nav>
  );
}
