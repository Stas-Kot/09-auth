import css from "./SearchBox.module.css"

interface SearchBoxProps {
  value: string;
  onSearch: (value: string) => void;
}

export default function SearchBox({ value, onSearch }: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      name="search"
      className={css.input}
      type="text"
      value={value}
      onChange={handleChange}
      placeholder="Search notes..."
      autoFocus
    />
  );
}