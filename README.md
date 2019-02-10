# REvisual

Visualize and compare Toronto real estate trends across municipalities, and easily create customized municipality-level market reports.

## Setting up the Backend

1. Navigate into the backend folder: `cd revisual-backend`

2. Run `bundle install` to install dependencies

3. Run `rake db:reset` to set up and seed the db

4. Import TREB listing data (see [Importing TREB Data from CSV](#importing-treb-data-from-csv))

5. Start the server with `rails server`. By default, the backend server listens on port `3001` and responds with JSON

## Setting up the Frontend

1. Navigate into the frontend folder: `cd revisual-frontend`

2. Run `npm install` to install dependencies

3. Run `npm start` to start up the live development server

4. Navigate to `localhost:3000`

## Importing TREB Data from CSV

Save csv data to `revisual-backend/rets/test-sample.csv`.

To import this data into the db from terminal run `rake import:listings`.

## Setup through Docker (WIP)

1. `cd revisual-backend`

2. `docker-compose build`

3. `docker-compose run --rm web rake db:setup import:listings`

4. `docker-compose up`

5. `cd ../revisual-frontend`

6. `docker-compose build`

7. `docker-compuse up`


## Dependencies

- Ruby 2.3.8

- Rails 5.2.2

- PostgreSQL 9.6

- Node.js 11.7

- React.js 16.7
