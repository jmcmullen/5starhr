<template>
  <header class="global-header">
    <div class="container">
      <div class="branding">
        <a href="/"><img src="../assets/img/5-star-hr-logo.jpg" alt="Five Star HR Logo" class="branding__img"></a>
      </div>
      <div class="main-menu">
        <nav class="main-menu__nav">
          <a class="main-menu__link" v-for="link in menu" :href="link.href"
             v-bind:class="{ active: isActive(link) }">{{link.title}}</a>
          <img src="../assets/img/icon-phone.svg" alt="" class="main-menu__icon">
          <a href="tel://0422634359" class="main-menu__phone">0422 634 359</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" src="../assets/scss/components/global-header.scss"/>

<script>
  export default {
    data () {
      return {
        menu: [
          {href: '/', title: 'Home'},
          {href: '/about-us', title: 'About Us'},
          {href: '/services', title: 'Services'},
          // {href: '#', title: 'Our Clients'},
          // {href: '#', title: 'HR Advice'},
          {href: '/contact-us', title: 'Contact Us'}
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
