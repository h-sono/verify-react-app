FROM python:3.12.1-slim-bullseye
RUN apt-get update \
    && apt-get install -y libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
# ワークディレクトリapp配下にtodo_app_v2配下のソースをコピー。
COPY ./todo_app_v2 .
RUN pip install --no-cache-dir -r requirements.txt
# Djangoの起動コマンド。
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
