FROM python:3.12.1-slim-bullseye
RUN apt-get update \
    && apt-get install -y libpq-dev gcc \
    && rm -rf /var/lib/apt/lists/*
WORKDIR /app
COPY /todo_app/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000", "--settings=todo_app.settings.local"]
