
$(document).ready(function () {
    $('#MainContent_Usertxt').blur(function () {
        if ($(this).val() == "" || $('#MainContent_UsertxtRegVal').css('display') == "inline" || $('#MainContent_UsertxtReqVal').css('display') == "inline") {
            $('#Usertxtcontainer').addClass('has-error');
        }
        if ($(this).val() != "" && $('#MainContent_UsertxtRegVal').css('display') == "none" && $('#MainContent_UsertxtReqVal').css('display') == "none") {
            $('#Usertxtcontainer').removeClass('has-error');
        }
    });
    $('#MainContent_Passwordtxt').blur(function () {
        if ($(this).val() == "" || $('#MainContent_PasswordtxtRegVal').css('display') == "inline" || $('#MainContent_PasswordtxtReqVal').css('display') == "inline") {
            $('#Passwordtxtcontainer').addClass('has-error');

        }
        else if ($(this).val() != "" && $('#MainContent_PasswordtxtRegVal').css('display') == "none" && $('#MainContent_PasswordtxtReqVal').css('display') == "none") {
            $('#Passwordtxtcontainer').removeClass('has-error');
        }
    });
    //registration
    $('#MainContent_FirstNametxt').blur(function () {
        if ($('#MainContent_FirstNametxtRegVal').css('display') == "inline") {
            $('#FirstNamecontainer').addClass('has-error');
        }
        if ($('#MainContent_FirstNametxtRegVal').css('display') == "none") {
            $('#FirstNamecontainer').removeClass('has-error');
        }
    });
    $('#MainContent_MiddleNametxt').blur(function () {
        if ($('#MainContent_MiddleNametxtRegVal').css('display') == "inline") {
            $('#MiddleNametxtcontainer').addClass('has-error');
        }
        if ($('#MainContent_MiddleNametxtRegVal').css('display') == "none") {
            $('#MiddleNametxtcontainer').removeClass('has-error');
        }
    });
    $('#MainContent_LastNametxt').blur(function () {
        if ($(this).val() == "" || $('#MainContent_LastNametxtRegVal').css('display') == "inline" || $('#MainContent_LastNametxtReqVal').css('display') == "inline") {
            $('#LastNamecontainer').addClass('has-error');

        }
        else if ($(this).val() != "" && $('#MainContent_LastNametxtRegVal').css('display') == "none" && $('#MainContent_LastNametxtReqVal').css('display') == "none") {
            $('#LastNamecontainer').removeClass('has-error');
        }
    });
    $('#MainContent_Emailtxt').blur(function () {
        if ($(this).val() == "" || $('#MainContent_EmailtxtRegVal').css('display') == "inline" || $('#MainContent_EmailtxtReqVal').css('display') == "inline") {
            $('#Emailcontainer').addClass('has-error');

        }
        else if ($(this).val() != "" && $('#MainContent_EmailtxtRegVal').css('display') == "none" && $('#MainContent_EmailtxtReqVal').css('display') == "none") {
            $('#Emailcontainer').removeClass('has-error');
        }
    });
    $('#MainContent_PasswordRegtxt').blur(function () {
        if ($(this).val() == "" || $('#MainContent_PasswordRegtxtRegVal').css('display') == "inline" || $('#MainContent_PasswordRegtxtReqVal').css('display') == "inline") {
            $('#PasswordRegtxtcontainer').addClass('has-error');

        }
        else if ($(this).val() != "" && $('#MainContent_PasswordRegtxtRegVal').css('display') == "none" && $('#MainContent_PasswordRegtxtReqVal').css('display') == "none") {
            $('#PasswordRegtxtcontainer').removeClass('has-error');
        }
    });
    $('#MainContent_DOBtxt').blur(function () {
        if ($(this).val() == "" || $('#MainContent_DOBtxtRegVal').css('display') == "inline" || $('#MainContent_DOBtxtReqVal').css('display') == "inline") {
            $('#DOBcontainer').addClass('has-error');

        }
        else if ($(this).val() != "" && $('#MainContent_DOBtxtRegVal').css('display') == "none" && $('#MainContent_DOBtxtReqVal').css('display') == "none") {
            $('#DOBcontainer').removeClass('has-error');
        }
    });
    $('#CalToggleBtn').on('click', function () {
        if ($('#CalenderDOBcontainer').css('display') == 'none') {
            $('#CalenderDOBcontainer').show(500);

        }
        else {
            $('#CalenderDOBcontainer').hide(500);
        }
    })
});