import axios from 'axios';

const headers = { 'Content-Type': 'application/json' }

class User {
  constructor() {
    this.name = '';
    this.clearance = '';
    this.favorites = [];
    this.email = ''
    this.isLoggedIn = false;
  }

  setIsLoggedIn(loggedIn) { this.isLoggedIn = loggedIn }

  setUserData(userData) {
    this.name = userData.data.name;
    this.clearance = userData.data.clearance;
    this.favorites = userData.data.favorites;
    this.email = userData.data.email;
    this.isLoggedIn = true;
  } 
}

export class AuthService extends User {
  constructor() {
    super();
    this.bearerHeader = {};
  }

  logoutUser() {
    this.name = '';
    this.clearance = '';
    this.isLoggedIn = false;
  }

  async registerUser(email, password) {
    const body = { "email": email, "password": password}
    try {
      await axios.post('https://art-beauty-backend.herokuapp.com/api/v1/accounts', body);  
    } catch (error) {
      throw error
    }
  }

  async createUser(name, email, clearance, favorites) {
    const body = { 
      "email": email,
      "name": name,
      "clearance": clearance,
      "favorites": favorites
    }
    try {
      const res =  await axios.post('https://art-beauty-backend.herokuapp.com/api/v1/users', body);  
      this.setUserData(res.data)
    } catch (error) {
      throw error
    }
  }

  async logInUser(email, password) {
    const body = { "email": email, "password": password }
    try {
      const res =  await axios.get('https://art-beauty-backend.herokuapp.com/api/v1/users', body, {headers});  
      console.log(res)
      this.setUserEmail(res.data.user);
      this.setIsLoggedIn(true);
      await this.findUserByEmail();

    } catch (error) {
      console.log(error);
      throw error;    
    }
  }

  async findUserByEmail () {
    const headers = this.getBearerHeader();
    try {
      const res = await axios.get(`https://art-beauty-backend.herokuapp.com/api/v1/users/${this.email}`, { headers })
      this.setUserData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  async getUsers() {
    try {
      const res =  await axios.get(`https://art-beauty-backend.herokuapp.com/api/v1/users`, { headers });  
      console.log(res.data.data)
    } catch (error) {
      console.log(error)
    }
  }

  deleteUser(id) {
    const headers = this.getBearerHeader();
    try {
      axios.delete(`https://art-beauty-backend.herokuapp.com/api/v1/users/${id}`, { headers });
      this.logoutUser();
    } catch (error) {
      console.log(error)
    }
  }
}

export class Service {
  constructor() {
    this.favorites = []
  }

  addFavorite = (item) => {
    if (this.favorites.includes(item)) {
      return null
    } else {
      this.favorites.push(item)
    }
  }
 }