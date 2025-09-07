Campus Event Management Platform:

***

# Setup Instructions for Campus Event Management Platform

## Prerequisites

- Node.js
- PostgreSQL
- pgAdmin(comes with PostgreSQL)

***

## Installation & Setup

1. **Clone the repository**

```bash
git clone <your-repo-url>
cd campus-events
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure Environment Variables**

Create a `.env` file in the project root with your PostgreSQL database credentials and server port:

```env
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=campus_events
DB_PASS=your_postgres_password
DB_PORT=5432
PORT=5000
```

4. **Setup the PostgreSQL Database**

- Create a database named `campus_events` in your PostgreSQL server.
- Run the SQL schema scripts located in `/db/schema.sql` (or paste the table creation queries in pgAdmin Query Tool) to create all required tables.

5. **Start the Server**

```bash
npm run dev
```

The server should start and listen on your specified PORT (default 5000).

***

## Testing the API

- Use Postman or any REST client to test the API endpoints.
- Examples:  
  - `GET http://localhost:5000/api/events` - Fetch all events  
  - `POST http://localhost:5000/api/registrations` - Register a student to an event  
  - Refer to the Design Document for full API details.

***

## My understanding of the project and the workflow

In this project I have built a backend system that is used to manage campus events as the scenario was provided in the assignment.
The main objective was to help the college staff create events like Workshops, Seminars , Fests and hackathons and allow students to register for these events , mark the attendance in the event and also provide feedback.

I have used Node.js and PostgreSQL as my tech stack in this project and also i have used Postman for the API testing.

Firstly, the setup of the project was done in VScode using npm and the node server was established. After that the database was created in postgreSQL and the following tables were created:
- colleges
- events
- registrations
- students
- attendance
- feedback

After the succesfull creation of the database i asked the AI fo assisting me with creating of the API endpoints and i started testing the API's one by one in Postman.

Below is the workflow of this project:
- Event is created by admin (POST request)
- Student browses througn the events and registers(POST request)
- when the event is attended by the student the attendance is marked(POST request)
- Students submit their feedback (POST request)
- reports such as popularity of events(by number of registrations) , top students and feedback are generated (GET request)

Also GET requests have been used for fetching the events, students, registrations, attendance and feedback.

I have explained the API endpoints in the DesignDocument.pdf uploaded in this repository.

I have uploaded the SQL queries and API testing done in Postman in Report.pdf

Also I have explained my Conversation with AI in the AI converstaion Screenshots.pdf please refer that. 
