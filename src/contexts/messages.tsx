import { IToastMessage } from "@/types/toast-message";
import { createContext, useContext, useState, ReactNode } from "react";

interface MessagesContextProps {
    messages: IToastMessage[];
    addMessage: (message: IToastMessage) => void;
    removeMessage: (id: string) => void;
}

const MessagesContext = createContext<MessagesContextProps>({} as MessagesContextProps);

function MessagesProvider({ children }: { children: ReactNode }) {
    const [messages, setMessages] = useState<IToastMessage[]>([]);

    const addMessage = (message: IToastMessage) => {
        setMessages((prevMessages) => [...prevMessages, message]);
    };

    const removeMessage = (id: string) => {
        setMessages((prevMessages) => prevMessages.filter((message) => message.id !== id));
    };

    return (
        <MessagesContext.Provider value={{ messages, addMessage, removeMessage }}>
            {children}
        </MessagesContext.Provider>
    );
}

const useMessages = () => {
    const context = useContext(MessagesContext);
    return context;
};

export { MessagesProvider, useMessages, MessagesContext };
