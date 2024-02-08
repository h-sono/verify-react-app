FROM python:3.12.1-slim-bullseye
WORKDIR /app
COPY /testapp/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY . .
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
