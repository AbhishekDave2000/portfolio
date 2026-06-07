import { useTheme } from "../context/ThemeContext";

const colors = ["amber", "emerald", "red", "cyan", "purple"];

const ThemeSwitcher = () => {
    const { setTheme, current } = useTheme();

    return (
        <div className="flex gap-2 items-center">
            {colors.map((color) => (
                <button
                key={color}
                onClick={() => setTheme(color)}
                className={`w-5 h-5 rounded-full border-2 transition-all
                    ${current === color ? "scale-125 border-white" : "border-transparent"}
                    bg-${color}-500`}
                />
            ))}
        </div>
    );
};

export default ThemeSwitcher;