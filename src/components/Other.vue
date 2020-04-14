<template>
   <transition name="fade" appear>
    <div class="main">
        <h1 class="title">BLOG</h1>
        <h2 class="sub-title">Note</h2>
        <p class="text">本コンテンツは下記にて拝見ください</p>
        <a href="https://note.com/ttmemo" class="uri">こちら→</a>
    </div>
   </transition>
</template>

<script>
jQuery(function($){
  var ua = navigator.userAgent;
  if ( ua.indexOf( 'iPhone' ) > 0 || ua.indexOf( 'iPad' ) > 0) {
    // iPhoneまたはiPadの場合
    $('.main').css({
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
.sub-title {
    font-size: 3.5vh;
    text-decoration: none;
    color: white;
}
.uri {
    font-weight:normal;
    font-size: 2.5vh; 
    text-decoration: none;
    color: white;
}
.text {
    font-size: 2vh;
}
.main {
    -webkit-appearance: none;
    width: 100vw;
    min-height: 100vh;
    color: white;
    background-image: url("../assets/b-top.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}
</style>

