export const STRINGS={
    BIRTHDATE_HEADING:"What is your date?",
    EMAIL_HEADING:"What is your email?",
    NAME_HEADING:"What is your name?",
    GENDER_SELECT_HEADING:"How would you like to be addressed?",
    PASSWORD_HEADING:"Define your password",
    MOBILE_VERIFICATION_HEADING:"Verify your mobile number",
    SEARCH_HEADING:"Find a ride",
    LOGIN_INPUT_HEADING:"What's your email and password?",
    FORGOT_PASSWORD:"What's your email? Check your inbox for a link to create a new password.",
    RESET_PASSWORD:"Reset Password"
}


export const REGEX={
    email:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
    name: "[a-zA-Z][a-zA-Z]+",
    password:"^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})"
}

export const VALIDATION_MESSAGES={
    EMAIL:{
        NOT_VALID:"Enter Valid Email",
        EMPTY:"*Email Required"
    },
    FIRST_NAME:{
        NOT_VALID:"Enter Valid First Name",
        EMPTY:"*FirstName Required"
    },
    LAST_NAME:{
        NOT_VALID:"Enter Valid Last Name",
        EMPTY:"*LastName Required"
    },
    PASSWORD:{
        NOT_VALID:"Enter Valid Password",
        EMPTY:"*Password Required",
      
    }

}


export const LOCALSTORAGE_KEY_NAME="token"