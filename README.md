# Pet Care App

Welcome to the Pet Care App! This application helps pet owners manage their pet's care routines, track health records, and connect with pet care services.

## Features

- User Registration and Login
- Pet Profile Management
- Health Record Tracking
- Pet Care Tips and Articles
- Appointment Booking with Vets
- Notifications and Reminders

## Tech Stack

- **Frontend:** React
- **Backend:** Python Flask
- **Database:** SQLite (or your preferred database)
- **Hosting:** Your preferred hosting service

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Python 3.x
- Node.js
- npm or yarn

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SooryaPandian/Pet-Care-App.git
   cd Pet-Care-App

2. **Backend Setup:**

   - Navigate to the backend directory:

     ```bash
     cd backend
     ```

   - Create a file named `connection.py` with the following content:

     ```python
     password = "zyzd qjlb riuu iodi"
     mail = "heistchief@gmail.com"
     ```

   - Install the required Python packages:

     ```bash
     pip install -r requirements.txt
     ```

   - Run the Flask server:

     ```bash
     flask run
     ```

3. **Frontend Setup:**

   - Navigate to the frontend directory:

     ```bash
     cd frontend
     ```

   - Install the dependencies:

     ```bash
     npm install
     ```

   - Start the React development server:

     ```bash
     npm start
     ```

4. **Running the App:**

   - Open your browser and navigate to `http://localhost:3000` to view the app.

### Creating an App Password in Gmail

To use Gmail for sending emails from the app, you need to create an app password:

1. Go to your Google Account.
2. Select Security.
3. Under "Signing in to Google," select App Passwords. You might need to sign in.
4. At the bottom, choose Select app and choose the app you’re using.
5. Choose Select device and choose the device you’re using.
6. Follow the instructions to generate the app password.
7. Copy the app password. This password will be used in the `connection.py` file.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request for any changes.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
```
