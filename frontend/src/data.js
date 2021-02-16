class Data {
  constructor() {
    this.BASE_URL = "http://localhost:3000";
  }
  getUser(data) {
    return fetch(`${this.BASE_URL}/users`, {
      method: "POST",
      
}
