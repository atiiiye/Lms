$(document).ready(function () {


    let NameField = $('.form__field#name')
    let PhoneNumberField = $('.form__field#phonenumber')
    let InstagramField = $('.form__field#instagram')
    let StatusField = $('input[name=status]')
    let maritalStatusField = $('input[name=maritalStatus]')
    let genderStatusField = $('input[name=gender]')
    let SubjectField = $('.form__field#subject')

    let ErrorName = $('.form__field__error.name')
    let ErrorPhonenumber = $('.form__field__error.phonenumber')
    let ErrorInstagram = $('.form__field__error.instagram')
    let ErrorStatus = $('.form__field__error.status')
    let ErrorMaritalStatus = $('.form__field__error.marital-status')
    let ErrorGenderStatus = $('.form__field__error.gender-status')
    let ErrorSubject = $('.form__field__error.subject')

    let submitButton = $('.contact-us-content__form__button')
    let form = $('.consultation-request__form')

    // submitButton.on('click', (event) => {

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

    // if (!StatusField.is(":checked")) {
    //     ErrorStatus.html("لطفا وضعیت مشاوره را تعیین کنید")
    // } else {
    //     ErrorStatus.html("")
    // }

    // if (!maritalStatusField.is(":checked")) {
    //     ErrorMaritalStatus.html("لطفا وضعیت تاهل را تعیین کنید")
    // } else {
    //     ErrorMaritalStatus.html("")
    // }

    // if (!genderStatusField.is(":checked")) {
    //     ErrorGenderStatus.html("لطفا جنسیت را تعیین کنید")
    // } else {
    //     ErrorGenderStatus.html("")
    // }

    // if (SubjectField.val().length === 0) {
    //     ErrorSubject.html("لطفا موضوع مشاوره را وارد کنید")
    // } else if (!SubjectField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
    //     ErrorSubject.html("لطفا موضوع مشاوره را به درستی وارد کنید")
    // } else {
    //     ErrorSubject.html("")
    // }
    // })


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

    StatusField.on('input', () => {
        if (!StatusField.is(":checked")) {
            ErrorStatus.html("لطفا وضعیت مشاوره را تعیین کنید")
        } else {
            ErrorStatus.html("")
        }
    })

    maritalStatusField.on('input', () => {
        if (!maritalStatusField.is(":checked")) {
            ErrorMaritalStatus.html("لطفا وضعیت تاهل را تعیین کنید")
        } else {
            ErrorMaritalStatus.html("")
        }
    })

    genderStatusField.on('input', () => {

        if (!genderStatusField.is(":checked")) {
            ErrorGenderStatus.html("لطفا جنسیت را تعیین کنید")
        } else {
            ErrorGenderStatus.html("")
        }
    })

    SubjectField.on('input', () => {
        if (SubjectField.val().length === 0) {
            ErrorSubject.html("لطفا موضوع مشاوره را وارد کنید")
        } else if (!SubjectField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
            ErrorSubject.html("لطفا موضوع مشاوره را به درستی وارد کنید")
        } else {
            ErrorSubject.html("")
        }
    })

    form.submit(function (event) {
        if (NameField.val() &&
            PhoneNumberField.val() &&
            StatusField.is(":checked") &&
            maritalStatusField.is(":checked") &&
            genderStatusField.is(":checked") &&
            SubjectField.val() &&
            ErrorName.html() == "" &&
            ErrorPhonenumber.html() == "" &&
            ErrorSubject.html() == ""
        ) {
            $(this).submit(function () {
                return true
            })
            console.log('form called')
        }
        else {
            event.preventDefault()
            console.log('form not called!')

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

            if (!StatusField.is(":checked")) {
                ErrorStatus.html("لطفا وضعیت مشاوره را تعیین کنید")
            } else {
                ErrorStatus.html("")
            }

            if (!maritalStatusField.is(":checked")) {
                ErrorMaritalStatus.html("لطفا وضعیت تاهل را تعیین کنید")
            } else {
                ErrorMaritalStatus.html("")
            }

            if (!genderStatusField.is(":checked")) {
                ErrorGenderStatus.html("لطفا جنسیت را تعیین کنید")
            } else {
                ErrorGenderStatus.html("")
            }

            if (SubjectField.val().length === 0) {
                ErrorSubject.html("لطفا موضوع مشاوره را وارد کنید")
            } else if (!SubjectField.val().match(/^[آإأابپتثجچحخدذرزژسشصضطظعغفقکگلمنهۀةوؤیيئءًٌٍَُِّ\s]+$/)) {
                ErrorSubject.html("لطفا موضوع مشاوره را به درستی وارد کنید")
            } else {
                ErrorSubject.html("")
            }
        }
    })
})
