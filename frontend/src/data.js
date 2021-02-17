class Data {
  constructor() {
    this.BASE_URL = "http://localhost:3000";
  }
  getUser(data) {
    return fetch(`${this.BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  getRanks() {
    return fetch(`${this.BASE_URL}/topten`)
    .then((response) => response.json());
  }
}
