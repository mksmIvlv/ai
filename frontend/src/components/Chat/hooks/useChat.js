import { useState, useRef, useEffect } from 'react';
import { sendTextMessage } from '../scripts/sendTextMessage';

export function useChat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isStartScreen, setStartScreen] = useState(true);

    const chatRef = useRef(null);
    const lastSenderRef = useRef(null);

    // Отправка сообщений
    const sendMessage = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        // сразу показываем сообщение юзера
        setMessages(prev => [...prev, { text: trimmed, sender: 'user' }]);
        lastSenderRef.current = 'user';

        // очищаем инпут
        setInput('');
        setIsTyping(true);

        // запрос на бэкенд
        sendTextMessage(trimmed)
            .then(data => {
                setMessages(prev => [...prev, { text: data.text || 'Нет ответа', sender: 'bot' }]);
                lastSenderRef.current = 'bot';
            })
            .catch(err => {
                console.error('Ошибка запроса:', err);
                setMessages(prev => [...prev, { text: 'Ошибка: не удалось получить ответ', sender: 'bot' }]);
                lastSenderRef.current = 'bot';
            })
            .finally(() => {
                setIsTyping(false);
            });
    };

    // Авто-отключение стартового экрана при наличии сообщений
    useEffect(() => {
        setStartScreen(messages.length === 0);
    }, [messages]);

    // Прокрутка вниз при новом сообщении от пользователя
    useEffect(() => {
        if (!chatRef.current) return;

        if (lastSenderRef.current === 'user') {
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);

    return {
        messages,
        input,
        isTyping,
        chatRef,
        setInput,
        sendMessage,
        isStartScreen
    };
}
