
FROM python:3
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /code

COPY requirements.txt /code
RUN pip install -r requirements.txt

COPY ./entrypoint.sh /entrypoint
RUN sed -i 's/\r$//g' /entrypoint
RUN chmod +x /entrypoint

COPY ./start.sh /start
RUN sed -i 's/\r$//g' /start
RUN chmod +x /start

COPY . /code/
EXPOSE 8000

#ENTRYPOINT ["/entrypoint"]

CMD ["/start"]