import React from 'react';
import { useNavigate } from 'react-router-dom';
import { INPUT } from '../const/routingPath.tsx';

export const ConfirmPage: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(INPUT);
  };

  return (
    <div>
      <p>確認ページ</p>
      <button onClick={handleClick}>戻る</button>
    </div>
  );
};
