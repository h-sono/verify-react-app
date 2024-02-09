/**
 * セッションストレージにキーと値をセットする関数。
 * @param key セッションストレージのキー。
 * @param setValue セッションストレージの値(オブジェクト)。
 * @returns なし
 */
export const SessionStorageSet = (key: string, setValue: object) => {
  sessionStorage.setItem(key, JSON.stringify(setValue));
};

/**
 * セッションストレージのキーと値をすべて削除する関数。
 * @param なし
 * @returns なし
 */
export const SessionStorageAllClear = () => {
  sessionStorage.clear();
};
