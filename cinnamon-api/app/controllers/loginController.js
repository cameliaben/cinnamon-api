const loginActions = require("../repositories/loginActions");

exports.login = async (request, response) => {
    const email = request.body.email;
    const password = request.body.password;

    loginActions.login(email, password)
    .then((result) => {
        console.log(result);

        return response.send(result);
    })
    .catch((error) => {console.log(error)});

}

exports.testLogin = (request, response) => {
    return response.send("test");
}