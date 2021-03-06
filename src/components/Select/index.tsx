import clsx from "clsx";
import { useCallback, useState } from "react";
import { Card, Icon, ClickAway } from "..";
import { not, identity } from "ramda";
import * as SC from './selects.styles';

type Option = {
  value: string;
  label: string;
}

type FakeLabelProps = {
  label?: string;
  value?: string;
  className?: string;
  onClick: () => void;
};
function FakeLabel({ className, label, value, onClick }: FakeLabelProps) {
  return (
    <button
      type="button"
      className={clsx(
        "flex justify-between items-center",
        "px-6 py-3",
        className
      )}
      onClick={onClick}
    >
      <span>{value || label}</span>

      <span className="w-3">
        <Icon.ArrowDown />
      </span>
    </button>
  );
}

type FakeOptionProps = {
  label?: string;
  onClick: () => void;
};
function FakeOption({ label, onClick }: FakeOptionProps) {

  return (
    <SC.FakeOptionButton
      onClick={onClick}
    >
      {label}
    </SC.FakeOptionButton>
  );
}

type FakeSelectProps = {
  label?: string;
  value: string;
  options: Option[];
  onSelect: (option: Option) => void;
};
function FakeSelect({ label, value, options, onSelect }: FakeSelectProps) {
  const [isExpand, setExpand] = useState(false);

  return (
    <ClickAway onClickAway={() => setExpand(false)}>
      <div className="text-xs flex flex-col gap-2 relative">
        <Card>
          <FakeLabel
            label={label}
            value={value}
            onClick={() => setExpand(not)}
          />
        </Card>

        {isExpand && (
          <Card>
            <ul
              className={clsx(
                "flex flex-col w-full bg-white",
                "absolute top-full mt-1 z-10"
              )}
            >
              {options.map(({ label, value }) => (
                <li key={value}>
                  <FakeOption
                    label={label}
                    onClick={() => {
                      onSelect({ label, value })
                      setExpand(false);
                    }}
                  />
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </ClickAway>
  );
}

type SelectProps = {
  placeholder?: string;
  options: Option[];
  onChange: (value: Option) => void;
};
export function Select({ placeholder, options, onChange }: SelectProps) {
  const [current, setCurrent] = useState(-1);

  const onSelect = useCallback(
    ({ value }: Option) => {
      const option = options.find((option) => option.value === value)
      onChange(option!);

      setCurrent(
        options.findIndex((option) => option.value === value)
      )

    },
    [setCurrent]
  );

  return (
    <>
      <select
        name="filter"
        className="sr-only"
        ref={(ref) => {
          if (!ref) return;

          ref.dispatchEvent(new Event("change", { bubbles: true }));
        }}
        value={options[current]?.value}
        onChange={identity}
      >
        <option value="-1">{placeholder}</option>

        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <FakeSelect
        label={placeholder}
        value={options[current]?.value}
        options={options}
        onSelect={onSelect}
      />
    </>
  );
}
