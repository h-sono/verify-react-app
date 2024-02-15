import React, { useState } from 'react';

// TODO:未完成
export const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ username, password })
    });
    if (response.ok) {
      console.log('Login successful');
      // ログイン成功時の処理を追加する
    } else {
      console.error('Login failed');
      // ログイン失敗時の処理を追加する
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        ユーザー名:
        <input type='text' value={username} onChange={e => setUsername(e.target.value)} />
      </label>
      <label>
        パスワード:
        <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <button type='submit'>ログイン</button>
    </form>
  );
};
