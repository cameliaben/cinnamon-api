const settings = require("../config/settings");
const aylienNewsAPI = require("aylien-news-api")
const defaultClient = aylienNewsAPI.ApiClient.instance;

var appId = defaultClient.authentications['app_id'];
appId.apiKey = settings.appID.value;

var appKey = defaultClient.authentications['app_key'];
appKey.apiKey = settings.appKey.value;

exports.getNews = async (request, serverResponse) => {
  //  const email = request..email;
   // const password = request.body.password;
const apiInstance = new aylienNewsAPI.DefaultApi();
const opts = {
    title: "coronavirus",
    language: ["en"]
}; 

const result = [];
var callback = function(error, data, response) {
    if (error) {
      console.error(error);
    } else {
      console.log("API called successfully. Returned data: ");
      console.log("========================================");
      for (var i = 0; i < data.stories.length; i++) {
        result.push(data.stories[i]);
      }

      return serverResponse.send(result);
    }
  };
  
  apiInstance.listStories(opts, callback);
}