$(document).ready(function () {

    let signupButton = $('#signup-button')
    let loginButton = $('#login-button')

    let FirstameField = $('.form__field#firstname')
    let LastnameField = $('.form__field#lastname')
    let PhoneNumberField = $('.form__field#phonenumber')
    let UsernameSignupField = $('.form__field#usernameSignup')
    let UsernameMobileField = $('.form__field#usernameMobile')
    let PasswordField = $('.form__field#password')

    let ErrorFirstame = $('.form__field__error.firstname')
    let ErrorLastname = $('.form__field__error.lastname')
    let ErrorPhonenumber = $('.form__field__error.phonenumber')
    let ErrorUsernameSignup = $('.form__field__error.usernameSignup')
    let ErrorUsernameMobile = $('.form__field__error.usernameMobile')
    let ErrorPassword = $('.form__field__error.password')


    //* signup form

    // FirstameField.on('input', () => {
    //     if (FirstameField.val().length === 0) {
    //         ErrorFirstame.html("لطفا نام خود را وارد کنید")
    //     } else if (!FirstameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
    //         ErrorFirstame.html("نام صحیح نمی باشد")
    //     } else {
    //         ErrorFirstame.html("")
    //     }
    // })
    //
    // LastnameField.on('input', () => {
    //     if (LastnameField.val().length === 0) {
    //         ErrorLastname.html("لطفا نام خانوادگی خود را وارد کنید")
    //     } else if (!LastnameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
    //         ErrorLastname.html("نام خانوادگی صحیح نمی باشد")
    //     } else {
    //         ErrorLastname.html("")
    //     }
    // })

    PhoneNumberField.on('input', () => {
        if (PhoneNumberField.val().length === 0) {
            ErrorPhonenumber.html("لطفا شماره تلفن خود را وارد کنید")
        } else if (!PhoneNumberField.val().match(/^[0-9]+$|[۰-۹]+$/)) {
            ErrorPhonenumber.html("شماره تلفن صحیح نمی باشد")
        } else if (PhoneNumberField.val().length < 8) {
            ErrorPhonenumber.html("شماره تلفن حداقل باید 8 رقم باشد")
        }
        else {
            ErrorPhonenumber.html("")
        }
    })

    UsernameSignupField.on('input', () => {
        if (UsernameSignupField.val().length === 0) {
            ErrorUsernameSignup.html("لطفا کد ملی خود را وارد کنید")
        } else if (
            !UsernameSignupField.val().match(/^[0-9]+$|[۰-۹]+$/)) {
            ErrorUsernameSignup.html("کدملی معتبر نمی باشد")
            console.log('onchange national code')
        } else {
            ErrorUsernameSignup.html("")
        }
    })

    $('form#signup').submit(function (event) {
        if (PhoneNumberField.val() &&
            UsernameSignupField.val() &&
            ErrorFirstame.text() == "" &&
            ErrorLastname.text() == "" &&
            ErrorPhonenumber.text() == "" &&
            ErrorUsernameSignup.text() == ""
        ) {
            console.log('submit signup form')
            $(this).submit(function () {
                return true
            })
        } else {

            if (PhoneNumberField.val().length === 0) {
                event.preventDefault()
                ErrorPhonenumber.html("لطفا شماره تلفن خود را وارد کنید")
            }
            //  else if (
            //     !PhoneNumberField.val().match(/^[0-9]+$/) ||
            //     PhoneNumberField.val().length < 8 ||
            //     !PhoneNumberField.val().match(/^[\u0600-\u06FF\s]+$/)
            // ) {
            //     event.preventDefault()
            //     ErrorPhonenumber.html("شماره تلفن صحیح نمی باشد")
            // } 
            else ErrorPhonenumber.html("")

            if (UsernameSignupField.val().length === 0) {
                ErrorUsernameSignup.html("لطفا کد ملی خود را وارد کنید")
            }
            // else if (
            //     !UsernameSignupField.val().match(/^[0-9]+$/) ||
            //     !UsernameSignupField.val().match(/^[\u06F0-\u06F90-9]+$/)) {
            //     console.log('submit national code')
            //     ErrorUsernameSignup.html("کدملی معتبر نمی باشد")
            // } 
            else ErrorUsernameSignup.html("")
        }

    })


    //* login form

    UsernameMobileField.on('input', () => {
        console.log('onchange usrname')
        if (UsernameMobileField.val().length === 0) {
            ErrorUsernameMobile.html("لطفا کدملی خود را وارد کنید")
        } else {
            ErrorUsernameMobile.html("")
        }
    })

    PasswordField.on('input', () => {
        if (PasswordField.val().length === 0) {
            ErrorPassword.html("لطفا شماره تلفن همراه خود را وارد کنید")
        } else {
            ErrorPassword.html("")
        }
    })

    $('form#login').submit(function (event) {
        // event.preventDefault()

        if (UsernameMobileField.val() &&
            ErrorUsernameMobile.text() == "" &&
            PasswordField.val() &&
            ErrorPassword.text() == ""
        ) {
            $(this).submit(function () {
                return true
            })
        } else {
            if (UsernameMobileField.val().length === 0) {
                event.preventDefault()
                ErrorUsernameMobile.html("لطفا کدملی خود را وارد کنید")
            } else {
                ErrorUsernameMobile.html("")
            }

            if (PasswordField.val().length === 0) {
                event.preventDefault()
                ErrorPassword.html("لطفا شماره تلفن همراه خود را وارد کنید")
            } else {
                ErrorPassword.html("")
                console.log('dont submit form')
            }
        }
    })
})
