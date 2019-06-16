FROM python:3.7
MAINTAINER Ahrav Dutta

ENV PYTHONUNBUFFERED 1

COPY ./requirements.txt /requirements.txt

RUN pip install --no-cache-dir -r /requirements.txt

RUN mkdir /src
WORKDIR /src
COPY ./src /src