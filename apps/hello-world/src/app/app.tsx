import React, { useEffect, useState } from 'react';
import { environment } from '../environments/environment';
import { Message } from '@az-204/api-interfaces';

export const App = () => {
  const [m, setMessage] = useState<Message>({ message: '' });

  useEffect(() => {
    fetch(`${environment.message_api}/api`)
      .then((r) => r.json())
      .then(setMessage);
  }, []);

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to hello-world!</h1>
      </div>
      <div>A message from our sponsors: {m.message}</div>
    </>
  );
};

export default App;
