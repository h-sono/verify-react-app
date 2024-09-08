import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';

export interface ErrorPopupProps {
  // ポップアップのタイトル。
  title?: string;
  // 閉じるときのボタンのタイトル。
  closeButtonTitle?: string;
  // ポップアップを開くかどうかのフラグ。
  open: boolean;
  // エラーメッセージ。
  message?: string;
  // カスタムボタン。
  buttons?: Array<{ text: string; onClick: () => void }>;
  // ポップアップを閉じる関数。
  onClose: () => void;
}

// ポップアップコンポーネント。
export const popUp: React.FC<ErrorPopupProps> = ({
  title = 'エラー',
  closeButtonTitle = '閉じる',
  open,
  message = 'エラー発生。',
  buttons = [],
  onClose
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        {buttons.length > 0 &&
          buttons.map((button, index) => (
            <Button key={index} onClick={button.onClick} color='primary'>
              {button.text}
            </Button>
          ))}
        <Button onClick={onClose} color='secondary'>
          {closeButtonTitle}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
