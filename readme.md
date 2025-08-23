# Asset Management System for Laptops

## Overview
This project is a full-stack Asset Management System designed to manage and track laptops within an organization. It provides features such as creating, reading, updating, and deleting (CRUD) laptop records. The application is built using **React** for the frontend and **Express.js** for the backend, ensuring a seamless user experience and robust API handling.

## Features
- **Laptop Management:**
  - Add new laptops with details like model, serial number, assigned user, and status.
  - Update existing laptop details.
  - Delete laptops that are no longer in use.
  - View a list of all laptops in the system.
- **Search and Filter:**
  - Search laptops by model, serial number, or assigned user.
  - Filter laptops based on status (e.g., available, assigned, under maintenance).
- **Responsive Design:**
  - Fully responsive user interface optimized for both desktop and mobile devices.

## Tech Stack
### Frontend:
- **React** (with React Router for navigation)
- **Bootstrap** for styling
- **Axios** for API requests

### Backend:
- **Express.js** (Node.js framework)
- **MongoDB** for database (via Mongoose ORM)

### Others:
- **Postman** for API testing
- **Git** for version control

## Installation
### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud-based)
- Git

### Steps
1. **Clone the repository:**
   ```bash
   git clone https://github.com/guptaakash67/laptopMangement.git
   cd laptopMangement
   ```

2. **Install dependencies:**
   - Backend:
     ```bash
     cd api
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set up environment variables:**
   - Create a `.env` file in the `backend` folder with the following:
     ```env
     MONGO_URI=<your_mongodb_connection_string>
     PORT=5000
     ```

4. **Run the application:**
   - Start the backend:
     ```bash
     cd api
     npm start
     ```
   - Start the frontend:
     ```bash
     cd frontend
     npm start
     ```
   The frontend will run on `http://localhost:3000`, and the backend will run on `http://localhost:5000`.

## API Endpoints
### Base URL: `http://localhost:5000/api/laptops` & `http://localhost:5000/api/employees`

| Method | Endpoint          | Description                            |
|--------|-------------------|----------------------------------------|
| GET    | `/`               | Get all laptops  & employees           |
| POST   | `/`               | Add a new laptop & employee            |
| GET    | `/:id`            | Get a laptop & employee  by ID         |
| PUT    | `/:id`            | Update laptop & employee  details      |
| DELETE | `/:id`            | Delete a laptop & employee             |

## Folder Structure
```
laptop-mangement/
├── api/
│   ├── models/           # Mongoose models
│   ├── routes/           # API routes
│   ├── server.js         # Main server file
│   └── .env              # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/   # React components
│   │   ├── pages/        # Page components
│   │   ├── App.js        # Main App component
│   │   └── index.js      # React entry point
│   └── public/           # Static assets
└── README.md
```

![Flow Diagram](https://github.com/ps3coder/Project_images_url/blob/main/Screenshot%202024-12-13%20221622.png)



## Screenshots
### Login Page:
![Login Screenshot](<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/ef95663a-59ce-43b1-834f-f6b94bd8a553" />
)

### Register Page:
![Register Screenshot](<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/f5c230c5-6973-484e-8ea6-72522aacb2fe" />
)

### Laptop Page:
![Form Screenshot](<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/8e9a214b-41ba-473d-a96a-628722403882" />
)

### Employee Page:
![Form Screenshot](<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/3bb9a171-2fff-4be9-a865-e50301ca1186" />
)

### Laptop Assigning:
![Form Screenshot](<img width="893" height="324" alt="image" src="https://github.com/user-attachments/assets/e1641496-d0de-4726-9536-45c4888997fb" />
)

### Database :
![Form Screenshot](<img width="1366" height="768" alt="image" src="https://github.com/user-attachments/assets/49a85d68-7ef3-4235-bed6-d26eed3d25ee" />
)

## Future Enhancements
- **Authentication:** Implement user authentication and role-based access control.
- **Advanced Analytics:** Add charts and graphs for better data visualization.
- **Email Notifications:** Notify users via email when laptops are assigned or updated.

## Contributions
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-branch
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add a feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-branch
   ```
5. Create a Pull Request.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

