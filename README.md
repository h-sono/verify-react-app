## React

- 起動する：`C:\Users\sonob\github\test-app>npm start`

## Django

- 仮想環境に切り替える：`C:\Users\sonob\github\test-app>`で`testenv\Scripts\activate`
- 起動する：`(testenv) C:\Users\sonob\github\test-app\testapp>python manage.py runserver`

## 秘密鍵、公開鍵の設定
- `$ ssh-keygen -t rsa`
- `$ cd  ~/.ssh`
- `id_rsa.pub`(公開鍵)をコピー。
- `https://github.com/settings/keys`の画面を開く。
  - アカウントアイコンをクリック。
  - settingsをクリック。
  - 「SSH and GPG keys」をクリック。
  - 「New SSH key」をクリック。
  - 「Title」は任意のものを入れる。
  - 「key」に先ほどコピペした公開鍵を貼り付けて「Add SSH key」をクリックして完了。
