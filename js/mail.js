(function ($) {
    'use strict';

    $('.input_control').on('change paste blur', function () {
        if ($(this).val().trim() == '') {
            $(this).addClass('inputEmpty').removeClass('inputNotEmpty');
        } else {
            $(this).removeClass('inputEmpty').addClass('inputNotEmpty');
        }
    });

    $("input[type='email']").on('change paste blur', function () {
        var sEmail = $("input[type='email']").val();
        if ($.trim(sEmail).length == 0) {
            $(this).addClass('invalid').removeClass('valid');
        }
        if (validateEmail(sEmail)) {
            $(this).addClass('valid').removeClass('invalid');
        }
        else {
            $(this).addClass('invalid').removeClass('valid');
        }
    });

    function validateEmail(sEmail) {
        var filter = /^([\w-\.]+)@((\[[0-9]{1,10}\.[0-9]{1,10}\.[0-9]{1,10}\.)|(([\w-]+\.)+))([a-zA-Z]{2,10}|[0-9]{1,10})(\]?)$/;
        if (filter.test(sEmail)) {
            return true;
        }
        else {
            return false;
        }
    }

    var form = $('.contact__form'),
        message = $('.contact__msg'),
        form_data;

    // Success function
    function done_func(response) {
        message.fadeIn().removeClass('error').addClass('success');
        message.text(response);
        setTimeout(function () {
            message.fadeOut();
        }, 10000);
        form.find('input:not([type="submit"]), textarea').val('');
    }

    // fail function
    function fail_func(data) {
        message.fadeIn().removeClass('success').addClass('error');
        message.text(data.responseText);
        setTimeout(function () {
            message.fadeOut();
        }, 10000);
    }
    
    form.submit(function (e) {
        e.preventDefault();
        form_data = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: form.attr('action'),
            data: form_data
        })
        .done(done_func)
        .fail(fail_func);
    });
    
})(jQuery);