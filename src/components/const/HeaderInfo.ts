import Cookies from 'js-cookie';

export interface HeaderProps {
  'X-CSRFToken': string;
  'Content-Type': string;
}

export interface HeaderInfo {
  headers: HeaderProps;
}

// APIの共通ヘッダー情報。
export const commonHeaderInfo = {
  headers: {
    // POST時にCSRFトークン検証をするためヘッダーで送信。
    'X-CSRFToken': Cookies.get('todoapp-csrftoken'),
    'Content-Type': 'application/json'
  } as HeaderProps
};
