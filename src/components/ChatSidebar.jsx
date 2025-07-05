import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FaEllipsisV, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

const ChatSidebar = ({
  user,
  chats,
  activeChat,
  onSelectChat,
  onDeleteChat,
  onArchiveChat,
  onViewProfile,
  onLogout,
}) => {
  return (
    <aside
      className="bg-dark bg-opacity-75 text-white d-flex flex-column"
      style={{ width: '280px', overflowY: 'auto' }}
    >
      {/* Usuario logeado */}
      <div
        className="d-flex align-items-center p-3 border-bottom border-white-25"
        style={{ gap: '0.75rem' }}
      >
        {/* Avatar usuario logeado */}
        {user.avatar ? (
          <img
            src={user.avatar}
            alt={user.name}
            className="rounded-circle"
            style={{ width: 36, height: 36, objectFit: 'cover' }}
          />
        ) : (
          <FaUserCircle size={36} className="text-white-75" />
        )}

        <div className="flex-grow-1">
          <strong>{user.name}</strong>
          <div className="small text-white-50">{user.email}</div>
        </div>
        <Dropdown>
          <Dropdown.Toggle
            as="button"
            className="btn btn-link btn-sm text-white p-0"
            style={{ boxShadow: 'none' }}
          >
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark" align="end">
            <Dropdown.Item onClick={onViewProfile}>
              <FaUserCircle className="me-2" />
              Ver perfil
            </Dropdown.Item>
            <Dropdown.Item onClick={onLogout} className="text-danger">
              <FaSignOutAlt className="me-2" />
              Cerrar sesión
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      {/* Lista de chats */}
      <ul className="list-group list-group-flush flex-grow-1">
        {chats.map(chat => (
          <li
            key={chat.id}
            className={`list-group-item d-flex justify-content-between align-items-center text-white ${
              activeChat.id === chat.id ? 'bg-primary bg-opacity-75' : 'bg-transparent'
            }`}
            style={{ cursor: 'pointer', border: 'none' }}
          >
            <div
              className="d-flex align-items-center flex-grow-1"
              onClick={() => onSelectChat(chat)}
              style={{ maxWidth: '180px', gap: '0.75rem' }}
            >
              {/* Avatar chat */}
              {chat.avatar ? (
                <img
                  src={chat.avatar}
                  alt={chat.name}
                  className="rounded-circle"
                  style={{ width: 36, height: 36, objectFit: 'cover', flexShrink: 0 }}
                />
              ) : (
                <FaUserCircle size={36} className="text-white-50 flex-shrink-0" />
              )}

              <div className="d-flex flex-column text-truncate">
                <strong className="text-truncate">{chat.name}</strong>
                <div className="small text-white-50 text-truncate">{chat.lastMessage}</div>
              </div>
            </div>

            {/* Menú de acciones */}
            <Dropdown>
              <Dropdown.Toggle
                as="button"
                className="btn btn-link btn-sm text-white p-0 ms-2"
                style={{ boxShadow: 'none' }}
              >
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark" align="end">
                <Dropdown.Item onClick={() => onArchiveChat(chat.id)}>📥 Archivar</Dropdown.Item>
                <Dropdown.Item onClick={() => onDeleteChat(chat.id)} className="text-danger">
                  🗑 Eliminar
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default ChatSidebar;
