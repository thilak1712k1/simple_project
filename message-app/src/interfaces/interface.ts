// login interface
export interface loginProp{
    email: string;
    password: string;
}

// register interface
export interface registerProp{
    username : string;
    email : string;
    password: string;
}

// auth contex
export interface AuthContexProps{
    user : registerProp[];
    login: (loginData: loginProp) => void;
    registerUser: (registerData : registerProp) => void;
    
}