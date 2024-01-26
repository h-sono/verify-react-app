## React

- 起動する：`C:\Users\sonob\github\test-app>npm start`

## Django

- 仮想環境に切り替える：`C:\Users\sonob\github\test-app>`で`testenv\Scripts\activate`
- 起動する：`(testenv) C:\Users\sonob\github\test-app\testapp>python manage.py runserver`
- パッケージを requirements.txt に出力：`pip freeze > requirements.txt`

## Docker

### 各種コマンド

- 起動：`docker-compose up --build`
- コンテナに接続：`docker-compose exec {コンテナ名} bash`
  ※例：docker-compose exec db bash

### Docker イメージに関して

- bash を使用できるイメージとできないイメージがあるので注意。
- 現状、Debian のバージョン 12（コードネーム：bullseye）を使用。

### React から API リクエストを Django サーバーに転送する設定

- `package.json`に追加した`proxy": "http://django:8000"`で転送。
- 「django」は docker-compose.yml のコンテナ名。django コンテナの 8000 番ポートに転送。
