import { useEffect, useRef, useState } from "react";

export function useWelcomeMessage(text, speed = 100) {
    const [displayedText, setDisplayedText] = useState("");
    const indexRef = useRef(0);
    const timeoutRef = useRef(null);

    // Печать приветсвенного сообщения
    useEffect(() => {
        if (!text) return;

        setDisplayedText("");
        indexRef.current = 0;

        function typeChar() {
            const currentIndex = indexRef.current;

            if (currentIndex < text.length) {
                setDisplayedText((prev) => prev + text[currentIndex]);
                indexRef.current += 1;
                timeoutRef.current = setTimeout(typeChar, speed);
            }
        }

        typeChar(); // запуск печати

        return () => clearTimeout(timeoutRef.current); // очистка при размонтировании
    }, [text, speed]);

    return displayedText;
}
