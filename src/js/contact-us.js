
$(document).ready(function () {

    let NameField = $('.form__field#name')
    let PhoneNumberField = $('.form__field#phonenumber')
    let MessageField = $('.form__field#message')

    let ErrorName = $('.form__field__error.name')
    let ErrorPhonenumber = $('.form__field__error.phonenumber')
    let ErrorMessage = $('.form__field__error.message')

    let submitButton = $('.contact-us-content__form__button')

    NameField.on('input', () => {
        if (NameField.val().length === 0) {
            ErrorName.html("لطفا نام و نام خانوادگی خود را وارد کنید")
        } else if (!NameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
            ErrorName.html("نام و نام خانوادگی صحیح نمی باشد")
        } else {
            ErrorName.html("")
        }
    })

    PhoneNumberField.on('input', () => {
        if (PhoneNumberField.val().length === 0) {
            ErrorPhonenumber.html("لطفا شماره تماس خود را وارد کنید")
        } else if (!PhoneNumberField.val().match(/^[0-9]+$/) || PhoneNumberField.val().length < 8) {
            ErrorPhonenumber.html("شماره تماس صحیح نمی باشد")
        } else {
            ErrorPhonenumber.html("")
        }
    })

    MessageField.on('input', () => {
        if (MessageField.val().length === 0) ErrorMessage.html("لطفا پیام خود را وارد کنید")
        else ErrorMessage.html("")
    })

    $('form').submit(function (event) {
        console.log($(this))

        if (NameField.val() &&
            PhoneNumberField.val() &&
            MessageField.val() &&
            ErrorName.html() == "" &&
            ErrorPhonenumber.html() == "" &&
            ErrorMessage.html() == ""
        ) {
            $(this).submit(function () {
                return true
            })
        } else {
            event.preventDefault()

            if (NameField.val().length === 0) {
                ErrorName.html("لطفا نام و نام خانوادگی خود را وارد کنید")
            } else if (!NameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
                ErrorName.html("نام و نام خانوادگی صحیح نمی باشد")
            } else {
                ErrorName.html("")
            }


            if (PhoneNumberField.val().length === 0) {
                ErrorPhonenumber.html("لطفا شماره تماس خود را وارد کنید")
            } else if (!PhoneNumberField.val().match(/^[0-9]+$/) || PhoneNumberField.val().length < 8) {
                ErrorPhonenumber.html("شماره تماس صحیح نمی باشد")
            } else {
                ErrorPhonenumber.html("")
            }

            if (MessageField.val().length === 0) ErrorMessage.html("لطفا پیام خود را وارد کنید")
            else ErrorMessage.html("")
        }
    })

    // $('#submit').on('click', (event) => {
    // event.preventDefault()

    // if (NameField.val().length === 0) {
    //     ErrorName.html("لطفا نام و نام خانوادگی خود را وارد کنید")
    // } else if (!NameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
    //     ErrorName.html("نام و نام خانوادگی صحیح نمی باشد")
    // } else {
    //     ErrorName.html("")
    // }


    // if (PhoneNumberField.val().length === 0) {
    //     ErrorPhonenumber.html("لطفا شماره تماس خود را وارد کنید")
    // } else if (!PhoneNumberField.val().match(/^[0-9]+$/) || PhoneNumberField.val().length < 8) {
    //     ErrorPhonenumber.html("شماره تماس صحیح نمی باشد")
    // } else {
    //     ErrorPhonenumber.html("")
    // }

    // if (MessageField.val().length === 0) ErrorMessage.html("لطفا پیام خود را وارد کنید")
    // else ErrorMessage.html("")

    // if (NameField.val() &&
    //     PhoneNumberField.val() &&
    //     MessageField.val() &&
    //     !ErrorName &&
    //     !ErrorPhonenumber &&
    //     !ErrorMessage) {
    //     submitButton.prop("disabled", false)
    // }
    // })
})