import { useThemeStore } from "@store/useThemeStore";

const Navbar = () => {
  const { theme, themes, setTheme } = useThemeStore();

  return (
    <nav className="flex items-center justify-between w-full px-8 py-4 shadow bg-bgPrimary">
      <h1 className="text-xl font-bold text-primary">Clean UI</h1>

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
