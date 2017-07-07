<template>
  <header class="global-header">
    <div class="container">
      <div class="branding">
        <a href="/">
          <img src="../assets/img/5-star-hr-logo.jpg" alt="Five Star HR Logo" class="branding__img">
        </a>
      </div>
      <img class="icon-menu icon-menu--open" src="../assets/img/icon-menu.svg" alt="Menu" @click="openMenu = true" v-show="!openMenu" />
      <img class="icon-menu icon-menu--close" src="../assets/img/icon-close.svg" alt="Close" @click="openMenu = false" v-show="openMenu" />
      <transition name="fade">
        <div class="main-menu" v-show="openMenu">
          <nav class="main-menu__nav">
            <a class="main-menu__link" v-for="link in menu" :href="link.href" v-bind:class="{ active: isActive(link) }">{{link.title}}</a>
            <img src="../assets/img/icon-phone.svg" alt="" class="main-menu__icon">
            <a href="tel://0422634359" class="main-menu__phone">0422 634 359</a>
          </nav>
        </div>
      </transition>
    </div>
  </header>
</template>


<script>
export default {
  data () {
    return {
      openMenu: false,
      menu: [
        { href: '/', title: 'Home' },
        { href: '/about-us', title: 'About Us' },
        { href: '/services', title: 'Services' },
        // {href: '#', title: 'Our Clients'},
        // {href: '#', title: 'HR Advice'},
        { href: '/contact-us', title: 'Contact Us' }
      ]
    }
  },
  methods: {
    isActive (link) {
      return this.$route.fullPath === link.href
    }
  }
}
</script>

<style src="../assets/scss/components/global-header.scss" lang="scss"></style>
