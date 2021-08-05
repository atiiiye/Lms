$(document).ready(function () {
    console.log('contact us page')

    $('#submit').on('click', (event) => {
        event.preventDefault()
        console.log('clicked')
        console.log($('.form__field').val())

    })

})