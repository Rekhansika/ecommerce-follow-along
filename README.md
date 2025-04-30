# ecommerce-follow-along

## Project Description
The Ecommerce Follow-Along project is a mentor-guided initiative to create a full-stack e-commerce application using the MERN stack (MongoDB, Express, React, Node.js). This project aims to provide hands-on experience in building scalable web applications by implementing essential features such as user authentication, product management, and order handling.

# Milestone 1: **Laying the Foundation**
* Initialized the project structure for both frontend and backend.
* Installed necessary dependencies for React, Node.js, and Express.
* Set up a basic server in Node.js using Express.js.
* Configured environment variables for secure credentials.

# Milestone 2: **Structuring the Project & UI Setup**
* Separated frontend and backend folders for modular development.
* Created a functional login page in the frontend using React.js.
* Installed and configured Tailwind CSS for responsive UI design.

# Milestone 3: **Backend Configuration & Database Connection**
* Organized the backend folder structure for scalability.
* Connected the server to MongoDB using Mongoose.
* Implemented error-handling middleware for API stability.

# Milestone 4: **User Management & File Handling**
* Created the User Model in Mongoose to define user data structure.
* Developed the User Controller to manage user authentication (signup, login).
* Implemented Multer for file handling, allowing user profile and product image uploads.

# Milestone 5: **User Registration & File Handling**
* Created the Sign up page in React and added code for signup backend also.
* Added the Sign up page validation in (signup, login).

# Milestone 6: **Password Hashing By Using Bcryptjs**
* added the password encryption in backend signup page.
* added comparision for checking password is correct or not in login backend.

# Milestone 7: **Password Decrypt By Using Bcryptjs**
* added the Password authentication in backend login page.
* Here we are first getting the hashed password from db serched by email and then comparing the input body password with hashed password by compare method in bcryptjs.

# Milestone 8: **Product Page In Frontend**
* added the Product Page in Frontend as a Homepage.

# Milestone 9: **Created Form For Product Upload**
* Created the AddProducts page in Frontend.
* Added form validation in AddProducts page.

# Milestone 10: **Created Schema Product Upload**
* Created ProductModel in backend.
* Created the productRouter page in Backend.
* Handeled file uploads by multer inside middleware multer.

# Milestone 11: **Created Homepage For Product**
* Created Home Page for dynamic products presentation. 
* added the backend part for handeling products (created endpoint to get products).

# Milestone 12: **Showing product according to user**
* Created Product Page for dynamic products presentation according to user mail. 
* Created backend for specific user products.

# Milestone 13: **Created Product Update**
* Created Product Update Endpoint for Updating products.
* Created form for updating data in frontend and created autofill function.

# Milestone 14: **Created Product Delete**
* Created Product Delete Endpoint for Updating products. 
* Created form for Deleting product in frontend.

# Milestone 15: **Created NavBar**
* Created NavBar.
* Created Navigation bar for navigating between pages.

# Milestone 16: **Created Product Details Page**
* Created Product Details Page for showing full product details in details page.
* Added Add to cart button with quantity selection.

# Milestone 17: **Created CRUD for cart**
* Created endpoints in backend CRUD for handling cart.
* Handled quantity for product in cart.

# Milestone 18: **Frontend for cart page**
* Created cart page in frontend.
* Created cart operations from frontend.

# Milestone 19: **Backend endpoint for cart item quantity**
* Created put request for updating quantity for cart item.

# Milestone 20: **Backend endpoint for User details**
* Created endpoint for User-details in backend.
* Created User.jsx for User-details in frontend.

# Milestone 21: **Created frontend for Address**
* Created route for Add Address Page in Frontend.
* Created form for adding Address.
* Stored address using useState Hook.

# Milestone 22: **Created Backend for Address and attached with frontend**
* Created backend endpoint for handeling address.
* Added backend endpoint with frontend.

# Milestone 23: **Worked on address in frontend and backend**
* Created Placeorder button in cart page and added navigation to select address.
* Created select address page and provided option to select one address.
* Created backend endpoint to send all address to user.

# Milestone 24: **Worked on address in frontend and backend**
* Displayed all of products in cart.
* Displayed all address in address selection page.
* Displayed total price in cart.
* Added place order button at the bottom.

# Milestone 25: **Worked on order backend and email services**
* Created endpoint for order.
* Implemented mail service from nodemailer.
* Handled address for the delivery.

# Milestone 26: **Worked on order backend and email service**
* Implemented mail with nodemailer.
* Sending order details to user via mails.