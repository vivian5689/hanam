//웹 브라우저가 html 을 모두 불러들이고,
// css파일도 불러들이고 난 후..
// 웹 브라우저에 내용을 배치할 준비가 된 경우
// 실행을 한다.
// 단.. css가 적용 되기전 상태이고,
// image 및 영상, 소리를 보여주기전 상태에서
// 실행된다.
$(document).ready(function() {

});

// 모든 css 적용하고,
// 모든 이미지 및 영상,소리가 불러들여진 때
// 즉, 화면에 보일 때 실행하는 코드
window.onload = function() {
    $(".pic-txt").dotdotdot({
        wrapper: 'div',
        /*  콘텐트를 감쌀 요소. */
        ellipsis: '... ',
        /*  말줄임표를 뭘로 할지 */
        wrap: 'letter',
        /*  자를 단위. 다음 옵션 중 하나 선택: 'word'/'letter'/'children' */
        after: null,
        /*  자르고 나서도 유지시킬 요소를 jQuery 선택자로 적는다. */
        watch: false,
        /*  윈도우가 리사이즈될 때 업데이트할 건지: true/'window' */
        height: 70,
        /*  선택. max-height를 지정한다. 만약 null이면 알아서 잰다. */
        tolerance: 0 /*  글이 넘치면 이만큼쯤 height를 늘린다 */
    });

    // sns 버튼관련코드
    var 버튼들 = $('.sns-bt');
    $.each(버튼들, function(index, item) {

        $(this).click(function() {

            $('.city-sns-list button').removeClass('sns-bt-active');

            $(this).addClass('sns-bt-active');

            $('.city-sns-wrap > div').removeClass('slide-sns-active');

            if (index == 0) {
                $('.slide-fb').addClass('slide-sns-active');
            }
            if (index == 1) {
                $('.slide-bg').addClass('slide-sns-active');
            }
            if (index == 2) {
                $('.slide-yt').addClass('slide-sns-active');
            }

        });
    });
    // favo link 슬라이드
    var sw_favo = new Swiper('.swiper-container', {

        // 무한반복
        loop: true,
       

        // 모션 속도 조절
        speed: 1500,
        // 몇장을 보여줄것인가
        slidesPerView: 9,



    });



}