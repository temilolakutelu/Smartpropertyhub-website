$(document).ready(

    $(function () {
        $('#list').click(function (event) { event.preventDefault(); $('#products .item').addClass('list-group-item'); });
        $('#grid').click(function (event) { event.preventDefault(); $('#products .item').removeClass('list-group-item'); $('#products .item').addClass('grid-group-item'); });
        if ($(window).width() < 740) {
            $('#products .item').removeClass('list-group-item');
            $('#products .item').addClass('grid-group-item');
        }


        var $window = $(window);

        // Function to handle changes to style classes based on window width
        function checkWidth() {
            if ($window.width() < 992) {
                $('#sub-li').removeClass('dropdown').removeClass('nav-item');
                $('#sub-nav').removeClass('dropdown-menu').addClass('nav').addClass('navbar-collapse').addClass('navbar-toggleable').addClass('navbar-nav').addClass('navbar-left');
                $('#sub-nav').hide();
                $("#sub-btn").removeClass('nav-link').removeClass('dropdown-toggle').attr('data-toggle', 'collapse').attr('data-target', '#sub-nav').addClass('navbar-toggler').addClass('collapsed').addClass('hidden-md-up').removeAttr('disabled');
                $("#sub-btn").click(function () {
                    $("#sub-nav").animate({ "opacity": "show", top: "100" }, 500);
                });
            };

            if ($window.width() >= 992) {
                $('#sub-li').addClass('dropdown').addClass('nav-item');
                $('#sub-btn').addClass('nav-link').addClass('dropdown-toggle').removeAttr('data-target').removeAttr('data-toggle', 'collapse').attr('data-toggle', 'dropdown').removeClass('navbar-toggler').removeClass('collapsed').removeClass('hidden-md-up').attr("disabled", "disabled");
                $('#sub-nav').addClass('dropdown-menu').removeClass('nav').removeClass('navbar-collapse').removeClass('collapse').removeClass('navbar-toggleable').removeClass('navbar-nav').removeClass('navbar-left').removeAttr('role').removeAttr('style').removeAttr('aria-expanded');
            }
        }

        // Execute on load
        checkWidth();

        // Bind event listener
        $(window).resize(checkWidth);

    }),
    $(function () {
        "use strict";

        function a(a) {
            var t = $(window).scrollTop(),
                i = t + $(window).height(),
                e = a.offset().top,
                n = e + a.height();
            return i >= n && e >= t
        }

        function t(a) {
            $(a.target).prev(".panel-heading").find(".fa").toggleClass("fa-minus fa-plus")
        }

        var i = new WOW({
            animateClass: "animated",
            offset: 100,
            mobile: !1
        });
        i.init(),
            function (a) {
                function t(t) {
                    var i = "webkitAnimationEnd animationend";
                    t.each(function () {
                        var t = a(this),
                            e = t.data("animation");
                        t.addClass(e).one(i, function () {
                            t.removeClass(e)
                        })
                    })
                }
                var i = a("#carousel-example-generic"),
                    e = i.find(".item:first").find("[data-animation ^= 'animated']");
                i.carousel(), t(e), i.carousel("pause"), i.on("slide.bs.carousel", function (i) {
                    var e = a(i.relatedTarget).find("[data-animation ^= 'animated']");
                    t(e)
                }), a("#carousel-example-generic").carousel({
                    interval: 3e3,
                    pause: "false"
                })
            }(jQuery), $.scrollUp({
                scrollName: "page_scroller",
                scrollDistance: 300,
                scrollFrom: "top",
                scrollSpeed: 500,
                easingType: "linear",
                animation: "fade",
                animationSpeed: 200,
                scrollTrigger: !1,
                scrollTarget: !1,
                scrollText: '<i class="fa fa-chevron-up"></i>',
                scrollTitle: !1,
                scrollImg: !1,
                activeOverlay: !1,
                zIndex: 2147483647
            }), $(window).scroll(function () {
                $(".counter").each(function () {
                    var t = a($(this));
                    t && !$(this).hasClass("Starting") && ($(this).addClass("Starting"), $(this).prop("Counter", 0).animate({
                        Counter: $(this).text()
                    }, {
                            duration: 3e3,
                            easing: "swing",
                            step: function (a) {
                                $(this).text(Math.ceil(a))
                            }
                        }))
                })
            }), $(".range-slider-ui").each(function () {
                var a = $(this).attr("data-min"),
                    t = $(this).attr("data-max"),
                    i = $(this).attr("data-min-name"),
                    e = $(this).attr("data-max-name"),
                    n = $(this).attr("data-unit");
                $(this).append("<span class='min-value'></span> <span class='max-value'></span><input class='current-min' type='hidden' name='" + i + "'><input class='current-max' type='hidden' name='" + e + "'>"), $(this).slider({
                    range: !0,
                    min: a,
                    max: t,
                    values: [a, t],
                    slide: function (a, t) {
                        a = a;
                        var i = parseInt(t.values[0]),
                            e = parseFloat(t.values[1]);
                        $(this).children(".min-value").text(i + " " + n), $(this).children(".max-value").text(e + " " + n), $(this).children(".current-min").val(i), $(this).children(".current-max").val(e)
                    }
                });
                var s = parseInt($(this).slider("values", 0)),
                    r = parseFloat($(this).slider("values", 1));
                $(this).children(".min-value").text(s + " " + n), $(this).children(".max-value").text(r + " " + n), $(this).children(".current-min").val(s), $(this).children(".current-max").val(r)
            }), $(".selectpicker").selectpicker(), $(".search-options-btn").click(function () {
                $(".search-contents").toggleClass("show-search-area"), $(".search-options-btn .fa").toggleClass("fa-chevron-down")
            }),
            function () {
                $("#ourPartners").carousel({
                    interval: 3600
                })
            }(),
            function () {
                $(".our-partners .item").each(function () {
                    for (var a = $(this), t = 1; 4 > t; t++) a = a.next(), a.length || (a = $(this).siblings(":first")), a.children(":first-child").clone().addClass("cloneditem-" + t).appendTo($(this))
                })
            }()
        var e = $(".sidebar-widget").width(),
            n = .61 * e;
        $(".sidebar-widget iframe").css("height", n), Dropzone.autoDiscover = !1, $(function () {
            $("div#myDropZone").dropzone({
                url: "/file-upload"
            })
        }), $(".panel-group").on("shown.bs.collapse", t), $(".panel-group").on("hidden.bs.collapse", t), $(".color-plate").on("click", function () {
            var a = $(this).attr("data-color");
            $('link[id="style_sheet"]').attr("href", "css/skins/" + a + ".css"), "default" == a ? $(".logo img").attr("src", "img/logos/logo.png") : $(".logo img").attr("src", "img/logos/" + a + "-logo.png")
        }), $(".setting-button").on("click", function () {
            $(".option-panel").toggleClass("option-panel-collased")
        })
    }),



);
(jQuery);