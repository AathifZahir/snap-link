# URL Shortener - Snap Link

![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![License](https://img.shields.io/badge/license-MIT-lightgray)
![Last Commit](https://img.shields.io/github/last-commit/AathifZahir/snap-link)
![Languages](https://img.shields.io/github/languages/top/AathifZahir/snap-link)
![Node.js](https://img.shields.io/badge/Node.js-14.x-green)
![MongoDB](https://img.shields.io/badge/MongoDB-4.4-lightgreen)
![Express](https://img.shields.io/badge/Express-4.17.x-orange)
![nanoid](https://img.shields.io/badge/nanoid-v3.x-blue)
![base62](https://img.shields.io/badge/base62-v1.x-blue)

A simple URL shortener service built using Node.js, Express, MongoDB, and nanoid.

## Table of Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgments](#acknowledgments)

## About The Project

This is a URL shortener API that allows users to create short URLs from long URLs and redirect to the original URL using the short URL. It uses MongoDB for storing the URLs and nanoid for generating short keys.

## Built With

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [nanoid](https://github.com/ai/nanoid)
- [base62](https://github.com/dankogai/js-base62)

## Getting Started

### Prerequisites

To run this project locally, you'll need to have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your_username/repo_name.git
   ```

2. Navigate to the project directory:

   ```bash
   cd repo_name
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up your MongoDB connection by adding a `.env` file with your `MONGO_URI`:

   ```bash
   MONGO_URI=mongodb://localhost:27017/your_db
   ```

5. Start the server:

   ```bash
   npm start
   ```

## Usage

To create a short URL, send a POST request to `/shorten` with the original URL in the body:

```json
{
  "orgUrl": "http://example.com"
}
```

To redirect to the original URL, send a GET request to `/shorten/:surl` with the short URL key.

## Directory Structure

```
└── ./  
    ├── controllers  
    │   └── urlController.js  
    ├── models  
    │   └── urlModel.js  
    ├── routes  
    │   └── urlRoute.js  
    ├── utils  
    │   └── shortener.js  
    └── server.js
```

## Roadmap

- Implement URL validation
- Add user authentication for URL management
- Provide analytics for shortened URLs (e.g., click count)
- Create a frontend interface for users

## Contributing

Contributions are not open but feel free to contact me if any.

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Your Name - [@AathifZahir](https://github.com/AathifZahir) - aathifzahir12@gmail.com

Project Link: [/AathifZahir/snap-link](https://github.com/AathifZahir/snap-link)

## Acknowledgments

- [Shields.io](https://shields.io/)
- [Mongoose](https://mongoosejs.com/)
- [Express](https://expressjs.com/)
- [Node.js](https://nodejs.org/)

### Explanation of Directory Structure and Files:
- **controllers/urlController.js**: Contains the logic for creating and retrieving short URLs.
- **models/urlModel.js**: Defines the schema for storing original and short URLs.
- **routes/urlRoute.js**: Handles routing for creating and redirecting short URLs.
- **utils/shortener.js**: Contains the logic for generating the short URL.
- **server.js**: Main entry point that sets up the Express server and MongoDB connection.

Let me know if you'd like to add or modify any details!
