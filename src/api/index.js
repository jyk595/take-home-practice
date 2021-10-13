/*
 * Example usage
 *
 * import Api from "./api";
 * const response = await Api.get(`http://localhost:3001/${endpoint}`);
 *
 */
class Api {
  static async call(url, method, body = {}) {
    const data = {
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    };
    if (Object.keys(body).length > 0) {
      data.body = JSON.stringify(body);
    }
    
    const response = await fetch(url, data);
    
    return await response.json();
  }

  static get(url) {
    return this.call(url, 'get');
  }

  static post(url, body = {}) {
    return this.call(url, 'post', body);
  }

  static delete(url) {
    return this.call(url, 'delete');
  }
};

export default Api;
