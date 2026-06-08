import { useTheme } from "../context/ThemeContext";

const colors = ["amber", "emerald", "red", "cyan"];

const ThemeSwitcher = () => {
    const { color: activeColor, setColor } = useTheme();

    return (
        <div className="flex gap-2 items-center">
            {colors.map((color) => (
                <button
                key={color}
                onClick={() => setColor(color)}
                className={`w-5 h-5 rounded-full cursor-pointer border-2 transition-all
                            ${activeColor === color ? "scale-125 border-white" : "border-transparent"}
                            bg-${color}-500`}
                />
            ))}
        </div>
    );
};

export default ThemeSwitcher;