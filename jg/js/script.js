$(document).ready(function(){
    $(".energy__slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        dots: true
    });

    $(".lemonade__slider").slick({
        lazyLoad: 'ondemand',
        slidesToShow: 1,
        dots: true
    });

    $('.energy__slider').on('afterChange', function(event, slick, currentSlide){
        // console.log(currentSlide);
        let e_img = currentSlide;
        if (e_img === 0){
            e_text.textContent = "fruit_Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium soluta cupiditate aspernatur et eos quidem aliquid accusantium ut quisquam harum non, nesciunt eaque suscipit nobis tempore rem cum! Laborum.";
        } else if (e_img === 1){
            e_text.textContent = "mango_Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium soluta cupiditate aspernatur et eos quidem aliquid accusantium ut quisquam harum non, nesciunt eaque suscipit nobis tempore rem cum! Laborum.";
            // $("energy slick-active").toggleClass("slick-active_yelow");
        };
      });
      
    $('.lemonade__slider').on('afterChange', function(event, slick, currentSlide){
        // console.log(currentSlide);
        let l_img = currentSlide;
        if (l_img === 0){
            l_text.textContent = "lime_Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium soluta cupiditate aspernatur et eos quidem aliquid accusantium ut quisquam harum non, nesciunt eaque suscipit nobis tempore rem cum! Laborum.";
        } else if (l_img === 1){
            l_text.textContent = "mango_Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium soluta cupiditate aspernatur et eos quidem aliquid accusantium ut quisquam harum non, nesciunt eaque suscipit nobis tempore rem cum! Laborum.";
        } else if (l_img === 2){
            l_text.textContent = "orange_Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium soluta cupiditate aspernatur et eos quidem aliquid accusantium ut quisquam harum non, nesciunt eaque suscipit nobis tempore rem cum! Laborum.";
        };
    });

    $(".header__burger").click(function(event) {
        $(".header__burger, .header__menu").toggleClass("active");
        $("body").toggleClass("lock");
        // console.log("click")
    });
});

let e_text = document.getElementById('e_text');
let l_text = document.getElementById('l_text');

e_text.textContent = "fruit_Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium soluta cupiditate aspernatur et eos quidem aliquid accusantium ut quisquam harum non, nesciunt eaque suscipit nobis tempore rem cum! Laborum.";
l_text.textContent = "lime_Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis laudantium soluta cupiditate aspernatur et eos quidem aliquid accusantium ut quisquam harum non, nesciunt eaque suscipit nobis tempore rem cum! Laborum."
