FROM node:13

WORKDIR /usr/app
COPY . /usr/app
RUN yarn install --frozen-lockfile

CMD yarn dev
