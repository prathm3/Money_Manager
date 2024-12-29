# Money Manager App

The Money Manager App helps users track their income and expenses with insightful charts and graphs.

---

## Technology Stack

### Frontend
- **ReactJS**
- **Redux** (State Management)
- **Axios** (API Integration)
- **Bootstrap** (UI Styling)

### Backend
- **Spring Boot**
- **JPA** (Java Persistence API)
- **MySQL** (Database)

---

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or later)  
  Download from [Node.js Official Site](https://nodejs.org/)

- **Java Development Kit (JDK)** (v11 or later)  
  Download from [Oracle Java](https://www.oracle.com/java/technologies/javase-downloads.html)

- **Maven** (Build tool for Java)  
  Download from [Apache Maven](https://maven.apache.org/)

- **MySQL Server**  
  Download from [MySQL Community Downloads](https://dev.mysql.com/downloads/)

---

## Setup Instructions

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd <repository-folder>
```
---

## Step 2: Frontend Setup
Navigate to the frontend folder:

```bash
cd frontend
```
Install the required dependencies:

```bash
npm install
```
Start the React development server:

```bash
npm start
```
This will start the frontend at http://localhost:3000.
---
## Step 3: Backend Setup
Navigate to the backend folder:

```bash
cd backend
```
Configure the database connection in application.properties (or application.yml):

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/money_manager
spring.datasource.username=<your-username>
spring.datasource.password=<your-password>
spring.jpa.hibernate.ddl-auto=update
```
Build the project using Maven:

```bash
mvn clean install
```
Run the Spring Boot application:

```bash
mvn run
```
The backend will run at http://localhost:8080.
---
## Step 4: Integrate Frontend and Backend
Update the base URL for Axios in the React project to match the backend API (http://localhost:8080):
```javascript
axios.defaults.baseURL = 'http://localhost:8080';
```
---
## Features.
- Expense and Income Tracking: View and manage your financial data.
- Charts and Graphs: Visualize data using dynamic charts.
- Responsive UI: Mobile-friendly design using Bootstrap.
- Spring Security Integration: Secure backend endpoints with user roles.
- JWT Authentication: Users log in to receive a JWT token.The token is stored in local storage and sent with API requests for secure access.
🔑 Authentication Features
- Login: Standard login with username and password.
- Google Login: Allows users to log in securely with their Google accounts.
---
## Additional Notes
Ensure the frontend and backend run simultaneously for full functionality.
Use environment variables for sensitive configurations like database credentials.
Troubleshooting
Frontend Issues:

Run npm install if dependencies are missing.
Ensure the React server is running on http://localhost:3000.
Backend Issues:

Verify application.properties has correct database credentials.
Ensure the MySQL server is running.
Database Issues:

Check the MySQL connection.
Use the correct schema and table structure.
Enjoy using the Money Manager App! 🎉
