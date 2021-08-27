$(document).ready(function () {
    let CodeField = $('.form__field#code')

    let ErrorCode = $('.form__field__error.code')


    CodeField.on('input', () => {
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

    $('form').submit(function (event) {
        if (CodeField.val() &&
            ErrorCode.html() == ""
        ) {
            $(this).submit(function () {
                return true
            })
        } else {
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

        }


    })
})