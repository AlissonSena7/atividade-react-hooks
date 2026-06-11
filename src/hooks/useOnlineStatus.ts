import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export function useOnlineStatus(): boolean {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error('useOnlineStatus must be used within an AuthProvider');
  }

  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return isOnline;
}