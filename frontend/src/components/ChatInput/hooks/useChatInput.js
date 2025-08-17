import { useRef, useEffect, useState } from 'react';

export default function useChatInput(setInput, sendMessage) {
    const textareaRef = useRef(null);
    const [initialHeight, setInitialHeight] = useState(0);

    // Запомнить высоту блока
    useEffect(() => {
        if (textareaRef.current) {
            setInitialHeight(textareaRef.current.scrollHeight); // сохраняем исходную высоту
        }
    }, []);

    // Динамически изменить высоту textarea под содержимое
    const handleInputChange = (e) => {
        setInput(e.target.value);
        const textarea = textareaRef.current;
        if (!textarea) return;

        textarea.style.height = 'auto';
        const newHeight = Math.min(textarea.scrollHeight, initialHeight * 2); // максимум в 2 раза
        textarea.style.height = `${newHeight}px`;
    };

    // Сбраситть высоту textarea обратно к исходной
    const handleSendMessage = () => {
        sendMessage();
        const textarea = textareaRef.current;
        if (textarea) textarea.style.height = `${initialHeight}px`;
        setInput('');
    };

    return {
        textareaRef,
        handleInputChange,
        handleSendMessage
    };
}
