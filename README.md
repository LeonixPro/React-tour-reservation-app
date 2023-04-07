## Tours reservation project

This is a test project that allows to choose tours, make reservations, add reviews with scores and manege them.

To run the application you need to have a backend server to handle API requests.

The backend used for the application is PHP / MYSQL.

---

### Application works with REST API and has following functionality:

- Authentication
  - Login
  - Registration
- Tour reservation
  - Display reservations
  - Cancel reservation
- Review (**CRUD**)
  - Add review
  - Display review list
  - Edit Review
  - Delete Review
- Scores (**CRUD**)
  - Add score
  - Display Scores
  - Edit Score
  - Delete Score

### Additional packages

- React Router
- UseForm

### Usage

---

1. **Initialize Project**
   - Create new react app  
      `npx create-react-app name-of-your-app`
   - **Install React Router**  
      `npm install react-router-dom`
   - **Install useForm**  
     `npm install react-hook-form`
2. **Organize components**
   - Create a `components` folder inside `src` directory
   - Create future custom `components` inside components folder
3. **Functionality**
   - Create `services` folder inside `src` directory
   - Add main functions to `services` folder
   - Add **ProtectedRoutes** to `services` folder
4. **Utils**
   - Create `utils` folder inside `src` directory
   - Add relevant functions to `utils` folder
5. **Context**

   - Create `context` folder inside `src` directory
   - Add context function to `context` folder

6. **UI folder**

   - Create `UI` folder inside `src` directory
   - Add relevant (often used) `components` to `UI` folder

7. **Assets**
   - Create `assets` folder inside `src` directory
   - Add css files to `assets` folder
8. **.Env**
   - Add `.env` file inside `root` directory
   - Add relevant api or api keys to `.env` file
9. **Connect bootstrap**
   - Add relevant links to `index.js`

---

### Index.js

App.js should be wrapped in `Router`

```jsx
<Router>
  <App />
</Router>
```

### App.js

App.js handles main functions.

1.  Following functions, hooks, and routes should be imported:

```jsx
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { onLogin, onRegister, editUser } from "./services/authServices";
import { useState, useEffect } from "react";
```

2.  App.js will check if user logged through useEffect and will assign relevant value to `logged` state (false or true).

3.  Relevant data will be provided through `AuthContext`.

4.  Routes with route guard will be set.

### API explanation

The application uses API requests in order to get data or perform actions. Every dynamic component uses relevant API request. First, API keys should be defined in `.env` file. After that API keys will be accessible through `process.env`.
There are two main API's in the project:

- **REACT_APP_MAIN_REQUEST** used for general functionality and to receive data.
- **REACT_APP_WEATHER_REQUEST** used to get weather.

---

**REACT_APP_MAIN_REQUEST** structure is following: `https://{domain}/{key}`
So, depending on what is needed, relevant action should be added after '/'. For example:  
`process.env.REACT_APP_MAIN_REQUEST/main`.

### Main Page

Main page is a dynamic page which displays following information:

- Top offers
- Promotions

There are two api requests in `Main` component:

- First request is `getTop()` from `services > toursServices`. Server returns 4 random tours every time component mounts.  
  The API is:
  `${process.env.REACT_APP_MAIN_REQUEST}/main`
- Second request is `getPromotions()` from `services > toursServices`. Server returns 3 tours in promotion.  
  The API is `${process.env.REACT_APP_MAIN_REQUEST}/promotions`.

### Authentication

Function to process registration is: `onRegister(data)` from `services > authServices.js`.  
API is: `${process.env.REACT_APP_MAIN_REQUEST}/user/register`

Function to process login is `onLogin(data)` from `services > authServices.js`.  
API is: `${process.env.REACT_APP_MAIN_REQUEST}/user/login`

### Tours page

The tours page will display list of available tours with relevant information. The request is `getTours()` from `services > toursServices` and the API is: `${process.env.REACT_APP_MAIN_REQUEST}/tours`.

### Tour page

Tour page will display all information regarding specific tour. Also, relevant weather will be shown for the destination mentioned in the tour.

Functionalities available:

- Display current weather based on destination
- Automated discount calculating
- Make reservation (with opportunity to add guests)
- Display reviews and total score
- Add review with score
- Edit review and score
- Delete review and score

> Note: Only authenticated users can make reservations and add review with the score. Every user can add only 1 review with the score.

#### Main functionality explanation

The component includes following hooks:

```jsx
import { useParams, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { useEffect, useState } from "react";
```

Following functions should be imported:

```jsx
import { getOneTour, getWeather } from "../../services/toursServices";
import { setScore } from "../../utils/utils";
import {
  deleteRev,
  editRev,
  getReviews,
  submitReview,
} from "../../services/reviewsServices";
```

**Main Request**

Following data will be gotten through useParams and useContext

```jsx
const { id } = useParams();
const { user } = useContext(AuthContext);
const { logged } = useContext(AuthContext);
```

1.  useEffect should be called with `id` as a dependency.
2.  Through `getOneTour(id)` request from `services > toursServices` get data regarding the tour.  
    The API is: `${process.env.REACT_APP_MAIN_REQUEST}/tour/${id}`.
3.  Handle error (if occurs). If the error occurs, user will be redirected to `404 page`.

```jsx
if (res.status === false) {
  return navigate("/404");
}
```

4.  After that, set the title, get weather and get reviews:

```jsx
setTitle(res.title);
getWeather(res.destination).then((res) => setWeather(res));
getReviews(id);
```

5.  Check if there are reviews available. If yes, total score will be calculated.

#### Functions handling actions with reviews

1. Get reviews `getReviews(id)` from `services > reviewsServices.js`.  
   API is: `${process.env.REACT_APP_MAIN_REQUEST}/reviews/show/${id}`
2. Add review `submitReview(newData, user.u_id)` from `services > reviewsServices.js`.  
   API is: `${process.env.REACT_APP_MAIN_REQUEST}/review/submit`
3. Edit review `editRev(newData, user.u_id)` from `services > reviewsServices.js`.  
   API is: `${process.env.REACT_APP_MAIN_REQUEST}/review/edit`
4. Delete review `deleteRev(user.u_id, r_id)` from `services > reviewsServices.js`.  
   API is: `${process.env.REACT_APP_MAIN_REQUEST}/review/delete/${review_id}`

#### Profile Page

User can edit some information: email, password, phone number, country, city.

Function to edit user information is `editUser(data, id)` from `services > authServices.js`.  
API is: `${process.env.REACT_APP_MAIN_REQUEST}/user/edit`

Function to update user password is `updatePassword(data)` from `services > authServices.js`.  
API is: ``${process.env.REACT_APP_MAIN_REQUEST}/user/update-password`

Function to display user reservations is `bookingList(id)` from `services > bookingServices`.  
API is: `${process.env.REACT_APP_MAIN_REQUEST}/user/bookings`

#### Manage Reservations

User can make reservation through **Tour page**

Function to make reservation is `bookingSubmit(data)` from `services > bookingServices`.  
API is: `${process.env.REACT_APP_MAIN_REQUEST}/booking/confirm`

User can manage reservations through **Profile page**
Function to cancel reservation is `cancel(data, id)` from `services > bookingServices`.  
API is: `${process.env.REACT_APP_MAIN_REQUEST}/booking/cancel`
