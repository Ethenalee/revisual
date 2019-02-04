FROM ruby:2.3.8-alpine  

RUN apk update && apk add build-base postgresql-dev nodejs tzdata


WORKDIR /lighthouse/revisual/revisual-backend

COPY Gemfile /lighthouse/revisual/revisual-backend/Gemfile
COPY Gemfile.lock /lighthouse/revisual/revisual-backend/Gemfile.lock

RUN bundle install

COPY . /lighthouse/revisual/revisual-backend