import React, {useState, useEffect, useRef} from "react";
import './styles/main.css';

export default function WelcomeMessage({ text, speed = 100 }) {
    const [displayedText, setDisplayedText] = useState("");
    const indexRef = useRef(0);
    const timeoutRef = useRef(null);

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

        typeChar(); // запускаем сразу

        return () => clearTimeout(timeoutRef.current); // очистка
    }, [text, speed]);


    return <div className="welcome-message-overlay">{displayedText}</div>;
}
