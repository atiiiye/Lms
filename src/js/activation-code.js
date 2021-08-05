$(document).ready(function () {

    console.log('code')

    let CodeField = $('.form__field#code')

    let ErrorCode = $('.form__field__error.code')

    $('#submit').on('click', (event) => {
        event.preventDefault()

        if (CodeField.val().length === 0) {
            ErrorCode.html("لطفا کد فعالسازی را وارد کنید")
        } else if (!CodeField.val().match(/^[0-9]+$/)) {
            ErrorCode.html("کد فعالسازی صحیح نمی باشد")
        } else if (CodeField.val().match(/^[0-9]+$/) && CodeField.val().length !== 5) {
            ErrorCode.html("کد فعالسازی باید پنج رقم باشد")
        } else {
            ErrorCode.html("")
        }
    })
})