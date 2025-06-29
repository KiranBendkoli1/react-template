import { useThemeStore } from "@store/useThemeStore";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { theme, themes, setTheme } = useThemeStore();

  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 shadow bg-bgPrimary">
      <div className="flex">
        <h1 className="pr-6 text-xl font-bold text-primary">Clean UI</h1>
        <div className="flex gap-4 px-4 py-1 text-tBase">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </div>
      </div>

      <select
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
        className="px-3 py-1 border rounded bg-primary text-tBase border-primary hover:bg-secondary"
      >
        {themes.map((t) => (
          <option className="shadow-none" key={t} value={t}>
            {t.replace("theme-", "").toUpperCase()}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Navbar;
