# Bridges

Opinionated Node.js Database-Driven Web Application Framework

## Installation

    npm install -g bridges

### Build From Source

    git clone https://github.com/stevenzeiler/bridges
    cd bridges
    npm run build

## Usage

This software is currently in early alpha mode, be aware.

### Generate a new Bridges application:

    bridges new my_bitcoin_web_app

A Bridges application maintains a fixed directory structure
that follows naming conventions for auto-loading of classes 
into the console and server applications.

### Generate a database model class

A Model connects the Brides application with its database,
serving as an ORM. Models are created in and can be manually
added to the app/models directory

    bridges generate model payment
    bridges g model

Generating a model will create a Model class, a database
migration file to create the model name database table,
and a mocha test file to test the model:
    
Output: 

    created app/models/payment.js
    created db/migrations/1418345423292-create-payments.js
    created test/models/payment_test.js

### Database Schema Migrations

Edit the db migration file to create payments to include
several columns in the table schema, and then run db- migrate

    bridges db-migrate

The above migration 1418345423292-create-payments.js 
when run will create a database table named payments.

### Use the interactive Console:

Use the interactive Console:

    cd my_bitcoin_web_app
    bridges console

    bridges> Payment

Bridges automatically loads classes from your application
making them availabe in the console.

