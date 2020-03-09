const login = async (email, password) => {
    const result = await `Your email is: ${email}, and your password is secret.`;
    return result;
}

module.exports = login;