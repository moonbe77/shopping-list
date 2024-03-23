FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN yarn install
RUN yarn build
RUN yarn global add serve

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD serve -s dist/ -l $PORT