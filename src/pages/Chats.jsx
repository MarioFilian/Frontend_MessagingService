import React, { useState } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatHeader from '../components/ChatHeader';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';

const dummyUser = {
  name: 'Isaac Llanda',
  email: 'isaac@example.com',
  // puedes agregar avatar, estado, etc aquí
};

const dummyChats = [
  { id: 1, name: 'Carlos', lastMessage: '¿Cómo estás?', unread: 2 },
  { id: 2, name: 'Ana', lastMessage: 'Nos vemos mañana', unread: 0 },
  { id: 3, name: 'Luis', lastMessage: 'Ok, gracias!', unread: 1 },
];

const dummyMessages = [
  { id: 1, fromMe: false, text: 'Hola, ¿qué tal?' },
  { id: 2, fromMe: true, text: 'Bien, gracias. ¿Y tú?' },
  { id: 3, fromMe: false, text: 'Todo bien, aquí trabajando.' },
];

const Chats = () => {
  const [user] = useState(dummyUser);
  const [chats, setChats] = useState(dummyChats);
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: Date.now(), fromMe: true, text: newMessage }]);
    setNewMessage('');
  };

  // Funciones para acciones del sidebar (simuladas)
  const handleDeleteChat = (chatId) => {
    if (window.confirm('¿Eliminar este chat?')) {
      const filteredChats = chats.filter(c => c.id !== chatId);
      setChats(filteredChats);
      if (activeChat.id === chatId && filteredChats.length > 0) {
        setActiveChat(filteredChats[0]);
      }
    }
  };

  const handleArchiveChat = (chatId) => {
    alert(`Chat ${chatId} archivado (simulado)`);
    // Aquí podrías implementar lógica real para archivar
  };

  const handleViewProfile = () => {
    alert('Mostrar perfil del usuario logeado (simulado)');
    // Aquí mostrar modal o navegar a perfil
  };

  const handleLogout = () => {
    alert('Cerrar sesión (simulado)');
    // Aquí redireccionar a login o limpiar sesión
  };

  return (
    <div
      className="d-flex"
      style={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(135deg, #0d6efd, #6610f2)',
        color: '#fff',
        overflow: 'hidden',
      }}
    >
      <ChatSidebar
        user={user}
        chats={chats}
        activeChat={activeChat}
        onSelectChat={setActiveChat}
        onDeleteChat={handleDeleteChat}
        onArchiveChat={handleArchiveChat}
        onViewProfile={handleViewProfile}
        onLogout={handleLogout}
      />

      <section className="d-flex flex-column flex-grow-1" style={{ height: '100vh' }}>
        <ChatHeader chat={activeChat} />
        <ChatMessages messages={messages} />
        <ChatInput
          message={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onSend={sendMessage}
        />

        <style>{`
          main::-webkit-scrollbar {
            width: 8px;
          }
          main::-webkit-scrollbar-thumb {
            background-color: rgba(255,255,255,0.3);
            border-radius: 20px;
          }
          @keyframes fadeIn {
            from {opacity: 0; transform: translateY(10px);}
            to {opacity: 1; transform: translateY(0);}
          }
        `}</style>
      </section>
    </div>
  );
};

export default Chats;
