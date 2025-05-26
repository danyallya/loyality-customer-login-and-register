$(document).ready(function () {


    $(".menu-bar-items .menu-item").click(function () {
        $(".menu-bar-items .menu-item")
            .removeClass("active");
        $(this)
            .addClass("active");

    });
    $(".menu-items .item").click(function () {
        $(".menu-items .item")
            .removeClass("active");
        $(this)
            .addClass("active");

    });
    $(".notifi-icon").click(function (e) {
        if ($(".notifi-box").hasClass("show")) {

            $(".notifi-box")

                .removeClass("show");

        }
        else {
            $(".notifi-box")
                .addClass("show");

        }
        e.stopPropagation()

    });
    $(document).on('click', function () {
        $(".notifi-box").removeClass("show");
    });


    $(function () {
        $('.mat-input-outer label').click(function () {
            $(this).prev('input').focus();
        });
        $('.mat-input-outer input').focusin(function () {
            $(this).next('label').addClass('active');
        });
        $('.mat-input-outer input').focusout(function () {
            if (!$(this).val()) {
                $(this).next('label').removeClass('active');
            } else {
                $(this).next('label').addClass('active');
            }
        });
    });
    $(".selLabel").click(function (e) {
        $(e.target).closest('.dropdown').toggleClass('active');
    });

    $(".dropdown-list li").click(function (e) {
        $(e.target).closest('.dropdown').find(".selLabel").text($(this).text());
        $(e.target).closest('.dropdown').removeClass('active');
        // $(e.target).find('span').text($('.selLabel').text());

        // $('.selLabel').text($(this).text());
        // $('.dropdown').removeClass('active');
        // $('.selected-item p span').text($('.selLabel').text());
        // e.stopPropagation()

    });

    $('input:radio[name="radio"]').change(
        function () {
            if ($(this).is(':checked') && $(this).val() == 'radio3') {
                $('.special-branch').css('display', "block");

            }
            else {
                $('.special-branch').css('display', "none");
            }
        });
    $('.progress-bar').each(function () {
        if ($(this).attr('aria-valuenow') == '100') {
            $(this).css('background-color', "#35d05b");
        }
    });


    $(".dashboard-item").each(function () {
        var colorR = Math.floor((Math.random() * 256));
        var colorG = Math.floor((Math.random() * 256));
        var colorB = Math.floor((Math.random() * 256));
        $(this).css("border-color", "rgb(" + colorR + "," + colorG + "," + colorB + ")");
    });

    $('.more-btn').click(function () {
        $(".in-more").css('display', "block");
        $(".more-btn").css('display', "none");

    });

});
