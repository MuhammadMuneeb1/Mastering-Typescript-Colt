// Type Declarations - Working With 3rd Party Code. Type Declaration Files end with ".d.ts"; 

// Using 3rd Party Libraries - Axios;
import axios from "axios";

// Defining Type for API (JSON Placeholder Users API).
interface User {
    id: number,
    name: string,
    username: string,
    email: string,
    address: {
      street: string,
      suite: string,
      city: string,
      zipcode: string,
      geo: {
        lat: string,
        lng: string
      }
    },
    phone: string,
    website: string,
    company: {
      name: string,
      catchPhrase: string,
      bs: string
    }
  }

// "axios.get(User)" for single user. "axios.get(User[])" for all users in api and then use forEach to print all users.  
axios
.get<User[]>('https://jsonplaceholder.typicode.com/users').then((res) => {
    // The Parsed JSON exists in the "parameterName.data";
    // console.log(res.data);
    // const {data} = res;
    // printUser(res.data); For single user, add user id "users/1" etc in url.
    res.data.forEach(printUser); // For all users, use forEach loop don't need to add user id in url.
})
.catch((e) => {
    console.log("ERROR!", e);
});

function printUser(user: User) {
    console.log(user.name);
    console.log(user.email);
    console.log(user.phone);
}



// Installing Types or Type Declarations Separately;

// "lodash" doesnot come with pre-defined types. That's why it is giving an Error during Import. So other than installing "lodash" also install "lodash" types with "npm install --save-dev @types/lodash" for using "lodash" in Typescript.
import _ from 'lodash';

// Those 3rd-Party Libraries which doesnot come with pre-defined types. Install their type declarations seperately with "npm install --save-dev @types/packagename" for using them in Typescript. In Official Typescript Documentation, Navigate to "Consumption -> this Type Search" and in Search bar you can check that library if it has pre-installed type declarations or not. Here, we can also find proper commands to install these library packages and their type declarations.