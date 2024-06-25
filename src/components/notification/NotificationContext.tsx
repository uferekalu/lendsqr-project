import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Notification {
  id: number;
  message: string;
  duration: number;
  background: string;
  color: string;
}

interface NotificationContextType {
  addNotification: (message: string, duration: number, background: string, color: string) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

let notificationId = 0;

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (message: string, duration = 3000, background = 'black', color = 'white') => {
    const id = notificationId++;
    const newNotification: Notification = { id, message, duration, background, color };
    setNotifications((prevNotifications) => [...prevNotifications, newNotification]);
    setTimeout(() => {
      setNotifications((prevNotifications) => prevNotifications.filter((n) => n.id !== id));
    }, duration);
  };

  return (
    <NotificationContext.Provider value={{ addNotification }}>
      {children}
      {notifications.map((notification) => (
        <div
          key={notification.id}
          style={{
            display: 'flex',
            background: notification.background,
            color: notification.color,
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            maxWidth: 'fit-content',
            position: 'fixed',
            top: '10px',
            right: '10px',
            zIndex: 1000,
            transition: 'transform 0.3s ease-in-out',
            fontSize: "13px"
          }}
        >
          {notification.message}
        </div>
      ))}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
