$(document).ready(function () {

    let signupButton = $('#signup')
    let loginButton = $('#login')

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


    signupButton.on('click', (event) => {
        event.preventDefault()
        console.log('signup')

        if (FirstameField.val().length === 0) {
            ErrorFirstame.html("لطفا نام خود را وارد کنید")
        } else if (!FirstameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
            ErrorFirstame.html("نام صحیح نمی باشد")
        } else {
            ErrorFirstame.html("")
        }

        if (LastnameField.val().length === 0) {
            ErrorLastname.html("لطفا نام خانوادگی خود را وارد کنید")
        } else if (!LastnameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
            ErrorLastname.html("نام خانوادگی صحیح نمی باشد")
        } else {
            ErrorLastname.html("")
        }

        if (PhoneNumberField.val().length === 0) {
            ErrorPhonenumber.html("لطفا شماره تلفن خود را وارد کنید")
        } else if (!PhoneNumberField.val().match(/^[0-9]+$/) || PhoneNumberField.val().length < 8) {
            ErrorPhonenumber.html("شماره تلفن صحیح نمی باشد")
        } else {
            ErrorPhonenumber.html("")
        }

        if (UsernameSignupField.val().length === 0) {
            ErrorUsernameSignup.html("لطفا نام کاربری خود را وارد کنید")
        } else if (UsernameSignupField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
            ErrorUsernameSignup.html("نام کاربری باید انگلیسی باشد")
        } else if (UsernameSignupField.val().match(/[0-9]+$/) && !UsernameSignupField.val().match(/[a-zA-Z]+$/)) {
            ErrorUsernameSignup.html("نام کاربری معتبر نمی باشد")
        } else if (UsernameSignupField.val().length < 6) {
            ErrorUsernameSignup.html("نام کاربری حداقل باید شامل شش کاراکتر باشد")
        } else {
            ErrorUsernameSignup.html("")
        }
    })

    // loginButton.on('click', (event) => {
    // if (UsernameMobileField.val().length === 0) {
    //     ErrorUsernameMobile.html("لطفا نام کاربری یا موبایل خود را وارد کنید")
    // } else if (UsernameMobileField.val().length < 6) {
    //     ErrorUsernameMobile.html("نام کاربری حداقل باید شامل شش کاراکتر باشد")
    // } else if (UsernameMobileField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
    //     ErrorUsernameMobile.html("نام کاربری باید انگلیسی باشد")
    // } else {
    //     ErrorUsernameMobile.html("")
    // }

    // if (PasswordField.val().length === 0) {
    //     ErrorPassword.html("لطفا رمز عبور خود را وارد کنید")
    // } else if (PasswordField.val().length < 8) {
    //     ErrorPassword.html("رمز عبور حداقل باید شامل هشت کاراکتر باشد")
    // } else {
    //     ErrorPassword.html("")
    // }
    // })


    UsernameMobileField.on('input', () => {
        console.log('onchange usrname')
        if (UsernameMobileField.val().length === 0) {
            ErrorUsernameMobile.html("لطفا نام کاربری یا موبایل خود را وارد کنید")
        } else if (UsernameMobileField.val().length < 6) {
            ErrorUsernameMobile.html("نام کاربری حداقل باید شامل شش کاراکتر باشد")
        } else if (UsernameMobileField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
            ErrorUsernameMobile.html("نام کاربری باید انگلیسی باشد")
        } else {
            ErrorUsernameMobile.html("")
        }
    })

    PasswordField.on('input', () => {
        console.log('onchange PasswordField')

        if (PasswordField.val().length === 0) {
            ErrorPassword.html("لطفا رمز عبور خود را وارد کنید")
        } else if (PasswordField.val().length < 8) {
            ErrorPassword.html("رمز عبور حداقل باید شامل هشت کاراکتر باشد")
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
            console.log('submit form')
            // console.log($(this))
            // test()
            $(this).submit()
            alert('submit form')
            // return true
        } else {
            console.log('dont submit form')
            console.log(UsernameMobileField.val())
            console.log(ErrorUsernameMobile.html(""))
            console.log(PasswordField.val())
            console.log(ErrorPassword.html(""))
            alert('dont submit form')
            return false
        }
    })

    const test = () => {
        // debugger
        // $('form#login').submit()
    }

})