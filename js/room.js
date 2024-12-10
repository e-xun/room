$(function () {
    // 히든메뉴바
    $(".icon").on("click", function () {
        $(".nav").slideToggle();
    });

    // con1
    $(document).ready(function () {
        // Datepicker 초기화
        $("#checkin").datepicker({
            dateFormat: "yy-mm-dd", // 날짜 형식
            minDate: 0, // 오늘 이후 날짜만 선택 가능
            onClose: function (selectedDate) {
                // 체크아웃 날짜를 체크인 날짜 이후로 제한
                $("#checkout").datepicker("option", "minDate", selectedDate);
            },
        });
        $("#checkout").datepicker({
            dateFormat: "yy-mm-dd",
            minDate: 0,
        });

        // 숫자 입력 필드 초기값 처리 (최소값 및 기본값)
        $("#rooms, #adults, #children").on("input", function () {
            if ($(this).val() < $(this).attr("min")) {
                $(this).val($(this).attr("min")); // 최소값 이하로 내려가지 않도록 제한
            }
        });
    });

    // // con2, con3 움직임
    $(document).ready(function () {
        // 초기 설정
        function resetAnimations() {
            $(".con2left, .con3left").css({
                opacity: 0,
                transform: "translateX(-100px)",
            });
            $(".con2ri, .con3ri").css({
                opacity: 0,
                transform: "translateX(100px)",
            });
        }

        // 초기 상태로 설정
        resetAnimations();

        // 스크롤 이벤트
        $(window).on("scroll", function () {
            var scrollTop = $(this).scrollTop();
            var windowHeight = $(this).height();

            // con2 애니메이션
            $(".con2").each(function () {
                var offsetTop = $(this).offset().top;
                if (scrollTop + windowHeight > offsetTop + 100) {
                    $(".con2left").css({
                        opacity: 1,
                        transform: "translateX(0)",
                        transition: "all 0.7s ease-in-out",
                    });
                    $(".con2ri").css({
                        opacity: 1,
                        transform: "translateX(0)",
                        transition: "all 0.7s ease-in-out",
                    });
                } else {
                    // 다시 초기 상태로 복구
                    $(".con2left").css({
                        opacity: 0,
                        transform: "translateX(-100px)",
                    });
                    $(".con2ri").css({
                        opacity: 0,
                        transform: "translateX(100px)",
                    });
                }
            });

            // con3 애니메이션
            $(".con3").each(function () {
                var offsetTop = $(this).offset().top;
                if (scrollTop + windowHeight > offsetTop + 100) {
                    $(".con3left").css({
                        opacity: 1,
                        transform: "translateX(0)",
                        transition: "all 0.7s ease-in-out",
                    });
                    $(".con3ri").css({
                        opacity: 1,
                        transform: "translateX(0)",
                        transition: "all 0.7s ease-in-out",
                    });
                } else {
                    // 다시 초기 상태로 복구
                    $(".con3left").css({
                        opacity: 0,
                        transform: "translateX(-100px)",
                    });
                    $(".con3ri").css({
                        opacity: 0,
                        transform: "translateX(100px)",
                    });
                }
            });
        });
    });

    // con4
    $(document).ready(function () {
        // 초기 설정: con4  화면 아래로 숨김
        $(".con4img").css({ opacity: 0, transform: "translateY(100px)" });
        $(".con4txt").css({ opacity: 0, transform: "translateY(100px)" });

        // 스크롤 이벤트
        $(window).on("scroll", function () {
            var scrollTop = $(this).scrollTop();
            var windowHeight = $(this).height();

            // con4 애니메이션
            $(".con4").each(function () {
                var offsetTop = $(this).offset().top;

                // con4 들어오면 애니메이션 실행
                if (scrollTop + windowHeight > offsetTop + 100) {
                    $(".con4img").css({
                        opacity: 1,
                        transform: "translateY(0)",
                        transition: "all 0.7s ease-in-out",
                    });
                    // 텍스트는 시간차를 두고 실행
                    setTimeout(function () {
                        $(".con4txt").css({
                            opacity: 1,
                            transform: "translateY(0)",
                            transition: "all 0.7s ease-in-out",
                        });
                    }, 700); // 300ms의 지연 시간
                } else {
                    // 다시 초기 상태로 복구
                    $(".con4img").css({
                        opacity: 0,
                        transform: "translateY(100px)",
                    });
                    $(".con4txt").css({
                        opacity: 0,
                        transform: "translateY(100px)",
                    });
                }
            });
        });
    });
});
