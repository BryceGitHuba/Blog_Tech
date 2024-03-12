# Your Blog

This is a CMS-style blog site where developers can publish their blog posts and comment on other developers' posts.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication: Users can sign up, log in, and log out.
- Create, read, update, and delete (CRUD) operations on blog posts.
- Comment on blog posts.
- Responsive design for mobile and desktop users.

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/your-blog.git

markdown
Copy code
2. Install dependencies:
npm install

sql
Copy code
3. Set up environment variables:
Create a `.env` file in the root directory and add the following variables:
DB_NAME=your_database_name
DB_USER=your_database_username
DB_PASSWORD=your_database_password
DB_HOST=your_database_host
SESSION_SECRET=your_session_secret

markdown
Copy code
Replace `your_database_name`, `your_database_username`, `your_database_password`, `your_database_host`, and `your_session_secret` with your actual database and session secret values.

## Usage

1. Start the server:
npm start

markdown
Copy code
2. Open your web browser and go to `http://localhost:3000` to view the application.

## Dependencies

- Express.js
- Sequelize
- Handlebars.js
- MySQL2
- Express-session
- Connect-session-sequelize
- Dotenv
- Bcrypt

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests to help improve this project.

## License

This project is licensed under the [MIT License](LICENSE).
