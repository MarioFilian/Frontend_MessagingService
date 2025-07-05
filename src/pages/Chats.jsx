import React, { useState } from 'react';
import ChatSidebar from '../components/ChatSidebar';
import ChatHeader from '../components/ChatHeader';
import ChatMessages from '../components/ChatMessages';
import ChatInput from '../components/ChatInput';
import PerfilUsuario from '../components/PerfilUsuario';
import PerfilContacto from '../components/PerfilContacto';

// Datos de ejemplo actualizados
const dummyUser = {
  name: 'María González',
  email: 'maria.gonzalez@example.com',
  avatar: 'https://i.pravatar.cc/150?img=15',
};

const dummyChats = [
  {
    id: 1,
    name: 'Alejandro',
    lastMessage: '¿Vamos a la reunión mañana?',
    unread: 1,
    avatar: 'https://i.pravatar.cc/150?img=21',
    isOnline: true,
    lastSeen: 'Hace 2 minutos',
  },
  {
    id: 2,
    name: 'Lucía',
    lastMessage: 'Perfecto, te veo a las 3.',
    unread: 0,
    avatar: 'https://i.pravatar.cc/150?img=32',
    isOnline: false,
    lastSeen: 'Hace 1 hora',
  },
  {
    id: 3,
    name: 'Juan Pérez',
    lastMessage: '¿Me enviaste el archivo?',
    unread: 3,
    avatar: 'https://i.pravatar.cc/150?img=9',
    isOnline: true,
    lastSeen: 'Hace 10 segundos',
  },
  {
    id: 4,
    name: 'Sofía Martínez',
    lastMessage: 'Gracias por la ayuda.',
    unread: 0,
    avatar: 'https://i.pravatar.cc/150?img=43',
    isOnline: false,
    lastSeen: 'Ayer',
  },
  {
    id: 5,
    name: 'Carlos Rivera',
    lastMessage: 'Nos vemos luego.',
    unread: 0,
    avatar: 'https://i.pravatar.cc/150?img=5',
    isOnline: true,
    lastSeen: 'Hace 3 minutos',
  },
];

const dummyMessages = [
  { id: 1, fromMe: false, text: 'Hola, ¿cómo te fue hoy?' },
  { id: 2, fromMe: true, text: 'Bien, gracias. ¿Y tú?' },
  { id: 3, fromMe: false, text: 'Muy bien, estuve ocupado con trabajo.' },
  { id: 4, fromMe: true, text: '¿Quieres que te ayude con algo?' },
  { id: 5, fromMe: false, text: 'Sí, por favor. Gracias.' },
];

const Chats = () => {
  const [user] = useState(dummyUser);
  const [chats] = useState(dummyChats);
  const [activeChat, setActiveChat] = useState(chats[0]);
  const [messages, setMessages] = useState(dummyMessages);
  const [newMessage, setNewMessage] = useState('');

  // Estados para mostrar perfil
  const [showPerfilUsuario, setShowPerfilUsuario] = useState(false);
  const [showPerfilContacto, setShowPerfilContacto] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;
    setMessages([...messages, { id: Date.now(), fromMe: true, text: newMessage }]);
    setNewMessage('');
  };

  // Funciones para abrir perfiles
  const abrirPerfilUsuario = () => {
    setShowPerfilUsuario(true);
    setShowPerfilContacto(false);
  };

  const abrirPerfilContacto = () => {
    setShowPerfilContacto(true);
    setShowPerfilUsuario(false);
  };

  // Funciones para cerrar perfiles
  const cerrarPerfiles = () => {
    setShowPerfilUsuario(false);
    setShowPerfilContacto(false);
  };

  // Pasa estas funciones a ChatSidebar y ChatHeader
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
      {!showPerfilUsuario && !showPerfilContacto && (
        <>
          <ChatSidebar
            user={user}
            chats={chats}
            activeChat={activeChat}
            onSelectChat={setActiveChat}
            onViewProfile={abrirPerfilUsuario} // botón ver perfil usuario
            onLogout={() => alert('Cerrar sesión')} // ejemplo
          />

          <section className="d-flex flex-column flex-grow-1" style={{ height: '100vh' }}>
            <ChatHeader chat={activeChat} onViewContactProfile={abrirPerfilContacto} />
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
        </>
      )}

      {showPerfilUsuario && <PerfilUsuario user={user} onClose={cerrarPerfiles} />}
      {showPerfilContacto && <PerfilContacto contacto={activeChat} onClose={cerrarPerfiles} />}
    </div>
  );
};

export default Chats;
