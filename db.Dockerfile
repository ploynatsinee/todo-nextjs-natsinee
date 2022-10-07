FROM postgres:latest

RUN mkdir postgres-data

ENV POSTGRES_USER postgres

ENV POSTGRES_PASSWORD postgres

ENV POSTGRES_DB test
