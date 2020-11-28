const checkLogin = (username, password) => {
    if(username.toLowerCase() === "admin") {
        if(password.toLowerCase() === "admin"){
            return {status: 200, user: { token: "abc123xyz", username: username, fullName: "Đinh Gia Kiệt"}}
        } else {
            return {status: 404, errorString: "Username or password is not match"}
        }
    } else {
        return {status: 404, errorString: "Username or password is not match"}
    }
}

export default checkLogin;
