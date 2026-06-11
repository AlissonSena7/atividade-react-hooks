import { useOnlineStatus } from '../hooks/useOnlineStatus';

export function StatusInternet() {
  const isOnline = useOnlineStatus();

  return (
    <div className="card-hook">
      <h3>9. useOnlineStatus</h3>
      <p>
        {isOnline
          ? '🟢 Conectado à Internet'
          : '🔴 Sem conexão com a Internet'}
      </p>
    </div>
  );
}