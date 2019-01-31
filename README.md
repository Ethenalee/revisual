# REvisual

Visualize and compare Toronto real estate trends across municipalities, and easily create customized municipality-level market reports.

## Setting up the Frontend

1. Navigate into the frontend folder: `cd revisual-frontend`

2. Run `npm install` to install dependencies

3. Run `npm start` to start up the live development server

4. Navigate to `localhost:3000`

## Setting up the Backend

1. Navigate into the backend folder: `cd revisual-backend`

2. Run `bundle install` to install dependencies

3. Run `rake db:reset` to set up and seed the db

4. Import TREB listing data (see [Importing TREB Data from CSV](#importing-treb-data-from-csv))

5. Start the server with `rails server`. By default, the backend server listens on port `3001` and responds with JSON

## Importing TREB Data from CSV

Sample data has already been processed and saved in `revisual-backend/rets/test-sample.csv`.

To import this data into the db from terminal run `rake import:listings`.

## Dependencies

- Ruby 2.3.5

- Rails 5.2.2

- PostgreSQL 11

- Node.js 11.7

- React.js 16.7
