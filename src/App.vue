<template>
  <div id="app">
    <div id="header">
      <!--リンクタグを生成します。-->
      <router-link to="/"><div class="logo"><span @click="scrollTop">TOMO'S PORTFOLIO</span></div></router-link>
      <div id="wrapper">
        <p class="btn-gnavi">
          <span></span>
          <span></span>
          <span></span>
        </p>        
        <nav id="global-navi">
          <ul class="menu">
            <li><div class="hover" ontouchstart="">
              <router-link to="/"><span @click="scrollTop">TOP</span></router-link>
            </div></li>
            <li><div class="hover" ontouchstart="">
              <router-link to="/about"><span @click="scrollTop">ABOUT</span></router-link>
            </div></li>
            <li><div class="hover" ontouchstart="">
              <router-link to="/work"><span @click="scrollTop">WORK</span></router-link>
            </div></li>
            <li><div class="hover" ontouchstart="">
              <router-link to="/other"><span @click="scrollTop">BLOG</span></router-link>
            </div></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class='box'>
      <router-view></router-view>
    </div>
    <footer>
        <router-link to="/"><span @click="scrollTop">TOP</span></router-link>　|　
        <router-link to="/about"><span @click="scrollTop">ABOUT</span></router-link>　|　
        <router-link to="/work"><span @click="scrollTop">WORK</span></router-link>　|　
        <router-link to="/other"><span @click="scrollTop">BLOG</span></router-link>
    </footer>    
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isMenuOpen: false,
      transition: {
        enter: '',
        leave: '',
        duration: 100,
      },
    };
  },
  mounted() {
    this.setupMenuHandlers();
  },
  methods: {
    setupMenuHandlers() {
      const btnGnavi = document.querySelector('.btn-gnavi');
      const globalNavi = document.getElementById('global-navi');
      const menuLinks = document.querySelectorAll('.menu a');

      if (btnGnavi && globalNavi) {
        btnGnavi.addEventListener('click', () => {
          this.toggleMenu();
        });

        menuLinks.forEach(link => {
          link.addEventListener('click', () => {
            this.closeMenu();
          });
        });
      }
    },
    toggleMenu() {
      const btnGnavi = document.querySelector('.btn-gnavi');
      const globalNavi = document.getElementById('global-navi');
      
      if (this.isMenuOpen) {
        this.closeMenu();
      } else {
        this.openMenu();
      }
    },
    openMenu() {
      const btnGnavi = document.querySelector('.btn-gnavi');
      const globalNavi = document.getElementById('global-navi');
      
      this.isMenuOpen = true;
      btnGnavi.classList.add('open');
      globalNavi.style.transition = 'right 0.2s ease';
      globalNavi.style.right = '0';
    },
    closeMenu() {
      const btnGnavi = document.querySelector('.btn-gnavi');
      const globalNavi = document.getElementById('global-navi');
      
      this.isMenuOpen = false;
      btnGnavi.classList.remove('open');
      globalNavi.style.transition = 'right 0.2s ease';
      globalNavi.style.right = '-100%';
    },
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }
}
</script>

<style>
html {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}
.box {
  width: 100vw;
  height: 100%;
  top: 4vh;
  position: relative;
  overflow: hidden;
  background-color: black;
  padding-bottom: 5rem;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  background-color: black;
  box-sizing: border-box;
}

#header {
  position: fixed;
  background-color:rgba(0,0,0,0);
  height: 7vh;
  width: 100%;
  display: flex;
  align-items: center;
  z-index: 1;
}
#header a {
  font-size: 1.2rem;
  text-decoration: none;
  color: white;
  margin: 0 0.5rem;
  padding: 3px 0.3rem;
}
ul {
  padding: inherit;
}
.logo {
  margin: 0 0.3rem;
  font-size: 1.4rem;
  color: white;
}
@media screen and (max-width:468px) {
  .logo {
    margin: 0 0.1rem;
    font-size: 1rem;
    color: white;
  }
}
.hover {
  /* border-radius: 90%; */
  transition: all 0.6s ease 0s;
}
.hover:hover {
  cursor: progress;
  transform: scale(1.1, 1.1);
}
#wrapper nav {
    position: fixed;
    top: 0;
    right: -30rem;
    width: 15rem;
    height: 100%;
    padding-top: 4rem;
    background:#333;
    font-size: 1.8rem;
    box-sizing: border-box;
    z-index: 0;
}
@media screen and (max-width:468px) {
  #wrapper nav {
    position: fixed;
    top: 0;
    right: -30rem;
    width: 100%;
    height: 100%;
    padding-top: 4rem;
    background:#333;
    font-size: 1.8rem;
    box-sizing: border-box;
    z-index: 0;
  }
}
#wrapper nav ul li {
    display:block;
    padding: 1.7rem 2.3rem;
    text-align: center;
}
#wrapper nav ul li a {
    text-decoration: none;
    color: #ddd
}
#wrapper .btn-gnavi {
    position: fixed;
    top: 0rem;
    right: 1.3rem;
    width: 2.3rem;
    height: 2.4rem;
    z-index: 3;
    box-sizing: border-box;
    cursor: pointer;
    -webkit-transition: all 400ms;
    transition: all 400ms
}
#wrapper .btn-gnavi span {
    position: absolute;
    width: 2.0rem;
    height: 0.3rem;
    background: #666;
    border-radius: 0.6rem;
    -webkit-transition: all 400ms;
    transition: all 400ms
}
#wrapper .btn-gnavi span:nth-child(1) {
    top: 0
}
#wrapper .btn-gnavi span:nth-child(2) {
    top: 0.65rem
}
#wrapper .btn-gnavi span:nth-child(3) {
    top: 1.27rem
}
#wrapper .btn-gnavi.open span {
    background: #fff
}
#wrapper .btn-gnavi.open span {
    width: 2rem;
}
#wrapper .contents section p {
    position: absolute;
    top: 50%;
    width: 30%;
    line-height: 1.4;
    font-size: 1.8rem;
    color: #fff;
}
#wrapper .contents section:nth-child(odd) p {
    left: 10%
}
#wrapper .contents section:nth-child(even) p {
    right: 10%
}
footer {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 0;
    color: white;
}
footer a {
    text-decoration: none;
    color: white;
}
</style>
