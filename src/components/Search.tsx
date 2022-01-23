import clsx from "clsx";
import { useState } from "react";
import { Icon } from ".";

type SearchProps = {
  className?: string;
  onChange: (value: string) => void;
};
export function Search({ className, onChange }: SearchProps) {
  const [search, setSearch] = useState('')

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onChange(search);
      }}>

      <label
        className={clsx("flex items-center py-2 px-4 text-gray-dark", className)}
      >
        <span className="w-6 mx-6">
          <Icon.Search />
        </span>

        <span className="sr-only">Search for a country...</span>

        <input
          type="search"
          name="search"
          placeholder="Search for a country..."
          className="w-full p-1 outline-none placeholder-gray-dark"
          style={{
            background: 'transparent'
          }}
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
}
