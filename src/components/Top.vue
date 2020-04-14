<template>
    <main>
        <div class="home">
            <p class="line-1 anim-typewriter">Welcome to TOMO`S PORTFOLIO.</p>
            <div class="arrowWrap">
                <div class="arrow">
                    <span></span>
                </div>
            </div>
        </div>
        <div class="about">
            <div class="content-text">
                <router-link class="text" to="/about"><span @click="scrollTop">.about</span></router-link>
            </div>
            <!-- <router-link to="/about"><span @click="scrollTop"><img src="../assets/a-top.jpg" alt=""></span></router-link> -->
        </div>
        <div class="work">
            <div class="content-text">
                <router-link class="text" to="/work"><span @click="scrollTop">.work</span></router-link>
            </div>
            <!-- <router-link to="/work"><span @click="scrollTop"><img src="../assets/w-top.jpg" alt=""></span></router-link> -->
        </div>
        <div class="blog">
            <div class="content-text">
                <router-link class="text" to="/other"><span @click="scrollTop">.blog</span></router-link>
            </div>
            <!-- <router-link to="/other"><span @click="scrollTop"><img src="../assets/b-top.jpg" alt=""></span></router-link> -->
        </div>
    </main>
       
</template>

<script>
export default {

    methods: {
        scrollTop: function(){
            window.scrollTo({
            top: 0,
            behavior: "smooth"
            });
        }
    }
}

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Anonymous+Pro);

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

.fade2-enter-active {
    transition: opacity 4000ms ease-out, transform 4000ms ease-out;
}

.fade2-enter {
    opacity: 0;
    transform: translateY(-14rem);
}

.fade2-leave-to {
    opacity: 0;
    transform: scale(0.97);
}

.fade2-leave-active {
    transition: opacity 600ms ease-out, transform 600ms ease-out;
}

main {
    width: 100vw;
    min-height: 100vw;
}

.home {
    width: 100vw;
    height: 100vh;
}

.line-1{
    position: relative;
    top: 45%;  
    max-width:100%;
    margin: 0 auto;
    border-right: 2px solid rgba(255,255,255,.75);
    font-size: 230%;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transform: translateY(-50%); 
    color: white;   
}
@media screen and (max-width: 812px) {
   .line-1{
        position: relative;
        top: 30%;  
        max-width:100%;
        margin: 0 auto;
        border-right: 2px solid rgba(255,255,255,.75);
        font-size: 120%;
        text-align: center;
        white-space: nowrap;
        overflow: hidden;
        transform: translateY(-50%); 
        color: white;   
    } 
}

.anim-typewriter{
  animation: typewriter 3s steps(44) 1s 1 normal both,
             blinkTextCursor 500ms steps(44) infinite normal;
}

@keyframes typewriter{
  from{width: 0;}
  to{width: 16em;}
}

@keyframes blinkTextCursor{
  from{border-right-color: rgba(255,255,255,.75);}
  to{border-right-color: transparent;}
}

.arrowWrap {
  margin-top: 85vh;
}

.arrow {
  width: 2rem;
  margin: 0 auto;
  -webkit-animation: arrow 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0s infinite alternate;
  animation: arrow 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 0s infinite alternate;
}

.arrow span {
  position: relative;
  display: block;
  left: 50%;
}

.arrow span:before {
  content: '';
  width: 15px;
  height: 15px;
  border: 0;
  border-top: solid 1px rgb(250, 250, 250);
  border-right: solid 1px rgb(250, 250, 250);
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
}

@keyframes arrow {
  0% {
    opacity: 1;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  100% {
    opacity: 0.5;
    -webkit-transform: translate3d(-50%, -8px, 0);
    transform: translate3d(-50%, -8px, 0);
  }
}

.about {
    -webkit-appearance: none;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/a-top.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.about .content-text {
    width: 100vw;
    height: 100vh;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.about .content-text .text {
    color: white;
    text-decoration: none;
    font-family: Verdana;
    font-weight: bold;
    text-align: center;
}

.work {
    -webkit-appearance: none;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/w-top.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.work .content-text {
    width: 100vw;
    height: 100vh;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.work .content-text .text {
    color: white;
    text-decoration: none;
    font-family: Verdana;
    font-weight: bold;
}

.work img {
    width: 40vw;
    height: 50vh;
    float: left;
}

.blog {
    -webkit-appearance: none;
    width: 100vw;
    height: 100vh;
    background-image: url("../assets/b-top.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
}

.blog .content-text {
    width: 100vw;
    height: 100vh;
    font-size: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
}

.blog .content-text .text {
    color: white;
    text-decoration: none;
    font-family: Verdana;
    font-weight: bold;
    text-align: center;
}

.blog img {
    width: 40vw;
    height: 50vh;
    float: right;
    margin-top: 0%
}

</style>
