FROM mongo

COPY src/database/initDb.js /docker-entrypoint-initdb.d/