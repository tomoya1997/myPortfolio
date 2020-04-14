<template>
   <transition name="fade" appear>
       <div class="body">
           <h1 class="title">WORK</h1>
           <main>
               <section class="cards">
                   <div class="card">
                       <div class="card_image-container">
                           <img class="image" src="../assets/RPG.png" alt="RPG">
                       </div>
                       <div class="card-content">
                           <p class="card_title text--medium">
                               RPG ※PCのみ
                               <div class="card_info">
                                   <p class="text--medium">by Tomoya</p>
                                   <a href="https://tomoya1997.github.io/RPG/" class="card__price text--medium">GO</a>
                               </div>
                           </p>
                       </div>
                   </div>
                   <div class="card">
                       <div class="card_image-container">
                           <img class="image" src="../assets/portfolio2.png" alt="RPG">
                       </div>
                       <div class="card-content">
                           <p class="card_title text--medium">
                               模写 ポートフォリオ　Bootstrap
                               <div class="card_info">
                                   <p class="text--medium">by Tomoya</p>
                                   <a href="https://tomoya1997.github.io/portfolio2/" class="card__price text--medium">GO</a>
                               </div>
                           </p>
                       </div>
                   </div>
                   <div class="card">
                       <div class="card_image-container">
                           <img class="image" src="../assets/portfolio3.png" alt="RPG">
                       </div>
                       <div class="card-content">
                           <p class="card_title text--medium">
                               ポートフォリオ　jQuery responsive未対応
                               <div class="card_info">
                                   <p class="text--medium">by Tomoya</p>
                                   <a href="https://tomoya1997.github.io/portfolio3/" class="card__price text--medium">GO</a>
                               </div>
                           </p>
                       </div>
                   </div>
                   <div class="card">
                       <div class="card_image-container">
                           <img class="image" src="../assets/videoChat.png" alt="RPG">
                       </div>
                       <div class="card-content">
                           <p class="card_title text--medium">
                               ビデオチャット　skyway
                               <div class="card_info">
                                   <p class="text--medium">by Tomoya</p>
                                   <a href="https://tomoya1997.github.io/videoChat_skyWay/index.html" class="card__price text--medium">GO</a>
                               </div>
                           </p>
                       </div>
                   </div>
               </section>
           </main>
        </div>
   </transition>
</template>

<script>
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
* {
    box-sizing: border-box;
    padding: 0;
    margin: 10;
}
.body {
    -webkit-appearance: none;
    min-height: 100vh;
    width: 100%;
    color: white;
    background-image: url("../assets/w-top.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size:cover;
    background-attachment: fixed;
}
.body .title {
    color: grey;
}
main {
    display: grid;
    grid-template-columns: 1fr repeat(12, minmax(auto, 60px)) 1fr;
    grid-gap: 40px;
    padding: 60px 0;
}
/* .image {
    width:1200px;
    height:600px;
} */
.text--medium {
    font-family: 'Open Suns', sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    color: #ecf0f1;
}
.cards {
    grid-column: 2 / span 12;
    display: grid;
    grid-template-columns: repeat(12, minmax(auto, 60px));
    grid-gap: 40px;
}
.card {
    grid-column-end: span 4;
    display: flex;
    flex-direction: column;
    background-color: #39393b;
    cursor: pointer;
    transition: all 0.3s ease 0s;
}
.card:hover {
    transform: translateY(-7px);
}
.card_image-container {
    width: 100%;
    padding-top: 56.25%;
    overflow: hidden; 
    position: relative;
}
.card_image-container img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.card-content {
    padding: 20px;
}
.card_title {
    margin-bottom: 20px;
}
.card_info {
    display: flex;
    align-self: end;
    align-items: center;
}
.card__price {
    margin-left: auto;
    padding: 5px 20px;
    background-color: #303032;
    border-radius: 20px;
}
@media only screen and (max-width: 1000px){
    .card {
        grid-column-end: span 6;
    }
}
@media only screen and (max-width: 700px){
    main {
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 12;
    }
}
@media only screen and (max-width: 500px){
    main {
        height: 100%;
        width: 100%;
        grid-template-columns: 10px repeat(6, 1fr) 10px;
        grid-gap: 10px;
        display: flex;
        justify-content: center;
    }
    .cards {
        width: 100vw;
        grid-column: 2 / sapn 6;
        grid-template-columns: repeat(6, 1fr);
        grid-gap: 20px;
    }
    .card {
        grid-column-end: span 6;
    }
}
</style>
