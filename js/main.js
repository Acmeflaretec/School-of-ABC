(function ($) {
    "use strict";

    // Initiate the wowjs
    new WOW().init();


    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
            $('.whatsapp').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
            $('.whatsapp').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });
    
})(jQuery);




function downloadFile(filePath, fileName) {
    // Create a new anchor element
    const downloadLink = document.createElement('a');

    // Set the href attribute to the file path
    downloadLink.href = filePath;

    // Set the download attribute to specify the filename
    downloadLink.download = fileName;

    // Append the anchor to the document body
    document.body.appendChild(downloadLink);

    // Simulate a click event on the anchor
    downloadLink.click();

    // Clean up: remove the anchor from the document
    document.body.removeChild(downloadLink);
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbxDSOsEhA-b7HBGjnQwEQ_tTJtbvcUAks65yfT6cZOnFYrTThs_PchpEp58clRUHaoY/exec'

const form = document.forms['contact-form']
const submitButton = document.querySelector('button[type="submit"]');


form.addEventListener('submit', e => {
 e.preventDefault()
 submitButton.disabled = true;
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
