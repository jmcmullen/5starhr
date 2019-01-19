<template>
  <header class="global-header">
    <div class="topbar">
      <div class="container">
        <p><strong>Free 1 Hour Consultation</strong> | <a href="tel://+61466909749">0422 634 359</a> | <a href="mailto:kirsty@fivestarhr.com.au">kirsty@fivestarhr.com.au</a></p>
      </div>
    </div>
    <div class="container">
      <img class="icon-menu icon-menu--open" src="~/assets/images/icon-menu.svg" alt="Menu" @click="openMenu = true" v-show="!openMenu" />
      <img class="icon-menu icon-menu--close" src="~/assets/images/icon-close.svg" alt="Close" @click="openMenu = false" v-show="openMenu" />
      <div class="branding">
        <a href="/">
          <img src="~/assets/images/logo.jpg" alt="Five Star HR Logo" class="branding__img">
        </a>
      </div>
      <transition name="fade">
        <div class="main-menu" v-show="openMenu">
          <nav class="main-menu__nav">
            <a class="main-menu__link" v-for="link in menu" :href="link.href" v-bind:class="{ active: isActive(link) }" :key="link.title">{{link.title}}</a>
            <a href="/contact-us" class="main-menu__link main-menu__link--cta">FREE 1 HOUR HR CALL</a>
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
        { href: '/our-clients', title: 'Our Clients' },
        { href: '/hr-advice', title: 'HR Blog' },
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
  height: 70px;
  position: fixed;
  z-index: 1000;
  background-color: $white;
  box-shadow: 0 0 4px #949599;
  @include av-mq(lap-and-up) {
    height: 99px;
  }
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
  float: right;
  margin-left: -5px;
  height: 70px;

  @include av-mq(lap-and-up) {
    height: 69px;
  }
}

.main-menu {
  margin-top: 70px;
  display: block;
  position: fixed;
  width: 100%;
  @include av-mq(lap-and-up) {
    display: inline !important;
    float: left;
    margin-top: 22px;
    margin-left: 50px;
    width: initial;
    position: relative;
  }
}

.main-menu__nav {
  height: 100vh;
  padding-top: 50px;
  background: #f1f6fb;
  @include av-mq(lap-and-up) {
    background: #fff;
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
  padding: 20px;
  text-align: center;
  text-decoration: none;
  font-size: 24px;
  @include av-mq(lap-and-up) {
    display: inline;
    background-color: white;
    font-size: 14px;
    text-transform: uppercase;
    padding: 5px 15px;
    text-decoration: none;
    color: $dark-blue;
    vertical-align: text-bottom;
    &.active {
      font-weight: 600;
    }
  }
}


.main-menu__link--cta {
  color: white;
  background-color: $mid-blue;
  font-weight: bold;
  max-width: 300px;
  margin: auto;

  @include av-mq(handheld-and-up) {
    margin-left: 10px;
    display: none;
  }

  @include av-mq(desk) {
    display: inline;
  }

  &:hover {
    color: white;
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

.icon-menu {
  float: left;
  display: block;
  margin: 24px 20px 0 24px;
  &--close {
    width: 30px;
  }
  @include av-mq(lap-and-up) {
    display: none;
  }
}

.topbar {
  color: white;
  background-color: $dark-blue;
  padding: 8px 0;
  display: none;
  font-size: 0.8rem;

  a {
    color: white;
    text-decoration: none;
  }

  p {
    margin: 0 15px 0 0;
  }

  @include av-mq(lap-and-up) {
    display: block;
  }
}
</style>
