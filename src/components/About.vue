<template>
    <transition name="fade" appear>
        <div class="about">
            <h1 class="title">ABOUT</h1>
            <h2 class="sub-title">Profile</h2>

            <p class="state">BirthPlace: Kanagawa</p>
            <p class="state">Hoby: Travel</p>
            <p class="state">Skill: PHP->laravel　JS->jQuery,Vue　Python</p><br>
            <p class="en-state">大学三年生からインターンとしてエンジニア活動を始め、</p>
            <p class="en-state">アプリの開発に携わる</p>
            <p class="en-state">現在はSierに所属</p><br>

            <p class="en-state">To be yourself in a world that is constantly trying </p>
            <p class="en-state">to make you something else is the greatest accomplishment.</p>
            <p class="transrate">絶えずあなたを</p>
            <p class="transrate">何者かに変えようとする世界の中で</p>
            <p class="state transrate">自分らしくあり続けること</p>
            <p class="transrate">それがもっとも素晴らしい偉業である</p>
        </div>
    </transition>
</template>

<script>
jQuery(function($){
  var ua = navigator.userAgent;
  if ( ua.indexOf( 'iPhone' ) > 0 || ua.indexOf( 'iPad' ) > 0) {
    // iPhoneまたはiPadの場合
    $('.about').css({
      // プロパティ名にハイフンが入っている場合は''で囲む
      'background-attachment': 'scroll',
    });
  }
});
</script>

<style scoped>
.fade-enter-active {
    transition: opacity 900ms ease-out, transform 900ms ease-out;
}
.fade-enter {
    opacity: 0;
    transform: translateY(-20px);
}
.fade-leave-to {
    opacity: 0;
    transform: scale(0.97);
}
.fade-leave-active {
    transition: opacity 600ms ease-out, transform 600ms ease-out;
}
.state {
    font-size: 2.5vh;
}
.sub-title {
    font-size: 3.5vh;
}
.en-state {
    font-size: 2vh;
}
.transrate {
    font-size: 2vh;
    color: rgb(192, 191, 190);
}
.pro-image {
    width: 15rem;
    height: 10rem;
}
.about {
    -webkit-appearance: none;
    width: 100vw;
    min-height: 100vh;
    color: white;
    background-image: url("../assets/a-top.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment: fixed;

}
@media screen and (max-width:468px) {
    
}
</style>
