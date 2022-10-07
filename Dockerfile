FROM node:latest

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

EXPOSE 3000

CMD ["npm", "run", "dev"]

# FROM library/postgres
# WORKDIR /data:/data/db
# RUN ["mkdir", "/docker-entrypoint-initdb.d"]
# ADD make_db.sh /docker-entrypoint-initdb.d/
# COPY  postgres-data:/var/lib/postgresql/data postgres-data:/var/lib/postgresql/data
# COPY  database.sql:/docker-entrypoint-initdb.d/database.sql database.sql:/docker-entrypoint-initdb.d/database.sql

# only create table