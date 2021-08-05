$(document).ready(function () {

    let valueNameField = $('.form__field#name')
    let valuePhoneNumberField = $('.form__field#phonenumber')
    let valueMessageField = $('.form__field#message')

    $('#submit').on('click', (event) => {
        event.preventDefault()

        if (valueNameField.val().length === 0) {
            $('.form__field__error.name').html("لطفا نام و نام خانوادگی خود را وارد کنید")
        } else if (!valueNameField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
            $('.form__field__error.name').html("نام و نام خانوادگی صحیح نمی باشد")
        } else {
            $('.form__field__error.name').html("")
        }


        if (valuePhoneNumberField.val().length === 0) {
            $('.form__field__error.phonenumber').html("لطفا شماره تماس خود را وارد کنید")
        } else if (!valuePhoneNumberField.val().match(/^[0-9]+$/)) {
            $('.form__field__error.phonenumber').html("شماره تماس صحیح نمی باشد")
        } else {
            $('.form__field__error.phonenumber').html("")
        }

        if (valueMessageField.val().length === 0) {
            $('.form__field__error.message').html("لطفا پیام خود را وارد کنید")
        } else {
            $('.form__field__error.message').html("")
        }


    })

})