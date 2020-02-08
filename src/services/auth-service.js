import axios from 'axios';

class Auth {
  constructor() {
    this.auth = axios.create( {
      baseURL: 'http://localhost:5000/api/auth',
      withCredentials: true,
    });
  }

  signup(user) {
    const { email, password, rememberMe } = user;
    return this.auth
            .post('/signup', { email, password, rememberMe })
            .then(({ data }) => data);
  }

  login(user) {
    const { email, password, rememberMe } = user;
    return this.auth
            .post('/login', { email, password, rememberMe })
            .then(({ data }) => data);
  }

  logout() {
    return this.auth
            .post('/logout')
            .then(response => response.data);
  }

  private() {
    return this.auth
            .get('/private')
            .then(response => response.data);
  }
}

const authService = new Auth();

export default authService;