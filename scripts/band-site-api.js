// "api_key": "ce20d677-4c93-47ba-8ec9-095771fa60d4"

const myApiKey = "ce20d677-4c93-47ba-8ec9-095771fa60d4";
class BandSiteApi {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://unit-2-project-api-25c1595833b2.herokuapp.com";
  }

  getComment = async () => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/comments/?api_key="${this.apiKey}"`
      );
      const commentsData = response.data;
      return commentsData;
    } catch (error) {
      console.log(error);
    }
  };

  getShow = async () => {
    try {
      const response = await axios.get(
        `${this.baseUrl}/showdates/?api_key="${this.apiKey}"`
      );
      const showsData = response.data;
      return showsData;
    } catch (error) {
      console.log(error);
    }
  };

  postComment = async (newComment) => {
    console.log(newComment);
    try {
      const response = await axios.post(
        `${this.baseUrl}/comments/?api_key="${this.apiKey}"`,
        newComment
      );
      console.log(response);
      const commentData = response.status;
      return commentData;
    } catch (error) {
      console.log(error);
    }
  };
}

export const getApiCall = new BandSiteApi(myApiKey);
