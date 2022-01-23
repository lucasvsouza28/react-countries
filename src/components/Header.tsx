import Icon from "./Icon";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { DefaultTheme } from "styled-components";
import { DarkTheme, LightTheme } from "../themes";

type HeaderProps = {
  theme: DefaultTheme,
  setTheme: (theme: DefaultTheme) => void;
};

export function Header({
  theme,
  setTheme
}: HeaderProps) {
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

      <button
        className="flex items-center gap-2 p-2"
        onClick={() => setTheme(theme === LightTheme ? DarkTheme : LightTheme)}
      >
        <span className="w-4">
          { theme === LightTheme ? <Icon.Moon /> : <Icon.Moon /> }
        </span>

        <span className="text-xs">Dark Mode</span>
      </button>
    </header>
  );
}
