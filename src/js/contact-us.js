$(document).ready(function () {
    console.log('contact us page')

    let valueNameField = $('.form__field#name')
    let valuePhoneNumberField = $('.form__field#phonenumber')
    let valueMessageField = $('.form__field#message')

    $('#submit').on('click', (event) => {
        event.preventDefault()
        console.log('clicked')

        if (valueNameField.val().length === 0) {
            $('.form__field__error.name').html("لطفا نام و نام خانوادگی خود را وارد کنید")
        } else {
            $('.form__field__error.name').html("")
        }

        if (valuePhoneNumberField.val().length === 0) {
            $('.form__field__error.phonenumber').html("لطفا شماره تماس خود را وارد کنید")
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