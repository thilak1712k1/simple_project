const base = "/";
const baseApi = "http://localhost:8080/api/";

export const routepath ={
    home : base,
    auth :{
        login : base + "auth/login",
        forgotpassword : base + "auth/login/forgotpassword",
        register : base + "auth/register"
    },
    dashboard : base + "home"
}

export const routeapi ={
    login : baseApi + "login",
    register : baseApi + "register"
}

// export const registerapiurl = "http://localhost:8080/api/register"

// export const loginapiurl = "http://localhost:8080/api/login"
