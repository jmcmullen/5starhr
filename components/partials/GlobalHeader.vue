<template>
  <header class="global-header">
    <div class="container">
      <div class="branding">
        <a href="/">
          <img src="~/assets/images/5-star-hr-logo.jpg" alt="Five Star HR Logo" class="branding__img">
        </a>
      </div>
      <img class="icon-menu icon-menu--open" src="~/assets/images/icon-menu.svg" alt="Menu" @click="openMenu = true" v-show="!openMenu" />
      <img class="icon-menu icon-menu--close" src="~/assets/images/icon-close.svg" alt="Close" @click="openMenu = false" v-show="openMenu" />
      <transition name="fade">
        <div class="main-menu" v-show="openMenu">
          <nav class="main-menu__nav">
            <a class="main-menu__link" v-for="link in menu" :href="link.href" v-bind:class="{ active: isActive(link) }">{{link.title}}</a>
            <img src="~/assets/images/icon-phone.svg" alt="" class="main-menu__icon">
            <a href="tel://0422634359" class="main-menu__phone">0422 634 359</a>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>


<script>
export default {
  data() {
    return {
      openMenu: false,
      menu: [
        { href: '/', title: 'Home' },
        { href: '/about-us', title: 'About Us' },
        { href: '/services', title: 'Services' },
        // {href: '#', title: 'Our Clients'},
        { href: '/hr-advice', title: 'Free Advice' },
        { href: '/contact-us', title: 'Contact Us' },
      ],
    };
  },
  methods: {
    isActive(link) {
      return this.$route.fullPath === link.href;
    },
  },
};
</script>

<style lang="scss" scoped>
$dark-blue: #0481ac;

.global-header {
  width: 100%;
  height: 80px;
  position: fixed;
  z-index: 1000;
  background-color: $white;
  border-bottom: 1px solid #e0e0e0;
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}

.branding__title {
  font-size: 2rem;
  font-weight: 600;
  padding-top: 30px;
}

.branding__img {
  width: 145px;
  margin-top: 0;
  float: left;
  margin-left: 10px;
}

.main-menu {
  margin-top: 80px;
  display: block;
  position: fixed;
  width: 100%;
  @include av-mq(lap-and-up) {
    display: inline !important;
    float: right;
    margin-top: 25px;
    width: initial;
    position: relative;
  }
}

.main-menu__nav {
  height: 100vh;
  padding-top: 50px;
  background: white;
  @include av-mq(lap-and-up) {
    display: inline;
    height: initial;
    padding-top: 0;
    .button-primary {
      margin-left: 15px;
    }
  }
}

.main-menu__link {
  width: 100%;
  color: #747474;
  display: block;
  background-color: white;
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  @include av-mq(lap-and-up) {
    display: inline;
    font-size: 18px;
    padding: 0 15px;
    text-decoration: none;
    color: $dark-blue;
    vertical-align: text-bottom;
    &.active {
      font-weight: 600;
    }
  }
}

.main-menu__icon {
  display: none;
  @include av-mq(lap-and-up) {
    width: 40px;
    display: inline-block;
    margin-left: 20px;
    padding: 0 10px;
  }
}

.main-menu__phone {
  font-size: 24px;
  line-height: 2;
  color: black;
  text-decoration: none;
  text-align: center;
  display: block;
  margin: 45px auto 0 auto;
  @include av-mq(lap-and-up) {
    display: inline;
    font-size: 18px;
  }
}

.icon-menu {
  float: right;
  display: block;
  margin: 24px 20px 0 0;
  &--close {
    width: 30px;
  }
  @include av-mq(lap-and-up) {
    display: none;
  }
}
</style>
