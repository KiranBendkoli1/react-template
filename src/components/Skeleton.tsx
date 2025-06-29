import { twMerge } from "tailwind-merge";
import { useThemeStore } from "@store/useThemeStore";
import { logger } from "@utils/logger";

const Skeleton = ({ className = "" }) => {
  const theme = useThemeStore((state) => state.theme);
  logger.log(theme)
  return (
    <div
      className={twMerge(
        `animate-pulse rounded h-4 w-full`,
        theme === "theme-black" ? "bg-gray-600" : "bg-gray-300",
        className,
      )}
    />
  );
};

export default Skeleton;
