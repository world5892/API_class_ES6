class EasyHTTP {
  // GET Request
  get(url) {
    return fetch(url)
    .then(res => {
      if(res.ok) {
        return res.json();
      } else {
        throw new Error(res.status);
      }
    })
  }

  // POST Request
  post(url, data) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      });
  }

  // PUT Request
  put(url, data) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      });
  }

  // DELETE Request
  delete(url) {
      return fetch(url)
      .then(res => {
        if(res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      });
  }
}


