FROM node:20.11.0-bullseye-slim AS react-build
# React起動時に自動でブラウザを開こうとする。その際にxdg-utilsが必要なのでインストール。
RUN apt-get update && apt-get install -y xdg-utils
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
CMD ["npm", "start"]

FROM python:3.12.1-slim-bullseye AS django-build
RUN apt-get update \
    && apt-get install -y libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY ./todo_app_v2/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

FROM nginx:stable-alpine3.17-slim AS nginx-build
# ビルドしたReactを/usr/share/nginx/html配下にコピー。
COPY --from=react-build /app /usr/share/nginx/html
# セットアップしたDjangoを/usr/src/app配下にコピー。
COPY --from=django-build /app /usr/src/app
COPY nginx.conf /etc/nginx/conf.d/default.conf
