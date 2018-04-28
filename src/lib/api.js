/*
 * A simple helper class to make read requests to the eden interview API
 */
export default class api {
  /*
   * example usage:
   * user_actions = await api.get(`user_actions?patient_id=${patientId}`)
   */
  static async get(endpoint) {
    try {
      let response = await fetch(this.fullURL(endpoint));
      return this.parseResponse(response);
    } catch (error) {
      throw error;
    }
  }

  static async parseResponse(response) {
    if(response.ok) {
      try {
        const body = await response.json();
        return body;
      } catch(error) {
        throw error;
      }
    }
    return false;
  }

  static fullURL(endpoint) {
    const baseURL = 'https://eden-interview-api.herokuapp.com'
    return `${baseURL}/${endpoint}`;
  }
}
