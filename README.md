# SecureNote Project

## Overview
SecureNote is a secure note-taking application that prioritizes the protection of sensitive information. This project aims to provide a robust and secure platform for individuals to store their confidential notes with confidence.

## Team

- **Ismael Kiprop** (Backend Developer)
  - In charge of architecting Django API endpoints and data modeling.
  - Ensuring the security of user data.

## Technologies Used
- **Frontend:**
  - React.js

- **Backend:**
  - Django (Django REST framework for API development)

- **Containerization:**
  - Docker

## Challenge Statement
- **Problem:**
  - Creating a secure note-taking application to protect sensitive information.

- **Limitations:**
  - The project will not provide end-to-end encryption for notes but will focus on secure storage and user authentication.

- **Target Audience/Users:**
  - Individuals who need a secure platform for storing sensitive notes.

## Risks
- **Technical Risks:**
  - Ensuring data security and encryption might be challenging.
  - Safeguard: Regular security audits and encryption protocols.

- **Non-Technical Risks:**
  - User adoption may be affected by concerns about data security.
  - Strategy: Transparent communication about security measures and benefits.

## Infrastructure
- **Branching and Merging:**
  - GitHub flow for branching and merging.

- **Deployment:**
  - Docker containers deployed using Docker Compose for simplified setup.

- **Data Population:**
  - Initial data population using Django database migrations.

- **Testing:**
  - Jest and React Testing Library for frontend testing.
  - Django TestCase for backend testing.

## How to Run
1. **Clone the repository:**
   ```bash
   git clone <https://github.com/IsmaelKiprop/SecureNote.git>

2. **Navigate to the frontend directory:**
	```bash
	cd secure-note-frontend

3. **Install dependencies:**
	```bash
	npm install
4. **Install dependencies:**
	```bash
	npm start

## Backend
1. **Navigate to the backend directory:**
	```bash
	cd secure-note-backend

2. **Install Django dependencies:**
	```bash
	pip install -r requirements.txt

3. **Run Django migrations:**
	```bash
	python manage.py migrate

4. **Start the Django server:**
	```bash
	python manage.py runserver

- Now, your SecureNote application should be running. Access the frontend at http://localhost:3000 and the Django backend at http://localhost:8000.

## Contributing

Feel free to contribute to the project by opening issues, suggesting improvements, or submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).
