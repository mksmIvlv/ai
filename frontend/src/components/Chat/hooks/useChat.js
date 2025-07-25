import { useState, useRef, useEffect } from 'react';
import { sendTextMessage } from '../scripts/sendTextMessage';

export function useChat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const [isStartScreen, setStartScreen] = useState(true);
    const [awaitingSendMessage, setAwaitingSendMessage] = useState(null);


    const chatRef = useRef(null);
    const lastSenderRef = useRef(null);

    const sendMessage = () => {
        const trimmed = input.trim();
        if (!trimmed) return;

        setInput('');
        setStartScreen(false); // Показываем окно
        setAwaitingSendMessage({ text: trimmed }); // Ждём раскрытия
    };

    // Авто-отключение стартового экрана при наличии сообщений
    useEffect(() => {
        setStartScreen(messages.length === 0);
    }, [messages]);

    useEffect(() => {
        if (!chatRef.current) return;

        if (lastSenderRef.current === 'user') {
            chatRef.current.scrollTo({
                top: chatRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [messages]);


    // Отправка отложенного сообщения после раскрытия контейнера
    useEffect(() => {
        if (!chatRef.current || !awaitingSendMessage) return;

        const container = chatRef.current;

        const observer = new ResizeObserver(entries => {
            const height = entries[0].contentRect.height;

            if (height >= 500) {
                observer.disconnect();

                const userMessage = awaitingSendMessage.text;
                setAwaitingSendMessage(null);

                setMessages(prev => [...prev, { text: userMessage, sender: 'user' }]);
                lastSenderRef.current = 'user';
                setIsTyping(true);

                sendTextMessage(userMessage)
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
            }
        });

        observer.observe(container);

        return () => observer.disconnect();
    }, [awaitingSendMessage]);

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
