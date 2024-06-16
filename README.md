# My Node Express App

This is a Node.js Express application that interacts with a PostgreSQL database. It follows the MVC (Model-View-Controller) architecture.

## Project Structure

```
my-node-express-app
├── src
│   ├── config
│   │   └── dbConfig.js
│   ├── controllers
│   │   └── index.js
│   ├── models
│   │   └── index.js
│   ├── routes
│   │   └── index.js
│   └── app.js
├── .env
├── package.json
└── README.md
```

## Installation

1. Clone the repository.
2. Install the dependencies using npm:

```bash
npm install
```

## Configuration

1. Create a `.env` file in the root directory.
2. Add the following environment variables to the `.env` file:

```
DB_HOST=<database_host>
DB_PORT=<database_port>
DB_NAME=<database_name>
DB_USER=<database_user>
DB_PASSWORD=<database_password>
```

Replace `<database_host>`, `<database_port>`, `<database_name>`, `<database_user>`, and `<database_password>` with your actual database connection details.

## Usage

To start the application, run the following command:

```bash
npm start
```

The application will be running at `http://localhost:3000`.

## API Endpoints

- GET `/`: Returns the homepage.

## Dependencies

- express
- dotenv
- pg
- pg-format

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.