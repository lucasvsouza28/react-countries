import Icon from "./Icon";
import clsx from "clsx";
import { Link } from "react-router-dom";

function ThemeToggle() {
  return (
    <button className="flex items-center gap-2 p-2">
      <span className="w-4">
        <Icon.Moon />
      </span>

      <span className="text-xs">Dark Mode</span>
    </button>
  );
}

export function Header() {
  return (
    <header
      className={clsx(
        "flex justify-between items-center",
        "px-4 py-6",
        "shadow-md"
      )}
    >
      <Link to="/">
        <h1 className="text-sm font-bold">Where in the world?</h1>
      </Link>

      <ThemeToggle />
    </header>
  );
}
