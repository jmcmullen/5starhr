<template>
  <footer class="footer">
    <div class="container">
      <div class="grid">
        <div class="grid__cell 1/4--lap-and-up">
          <p>
            <strong>Five Star HR</strong>
          </p>
          <p>All Rights Reserved</p>
          <p>Copyright 2010 - {{ year }}</p>
        </div>
        <div class="grid__cell 1/4--lap-and-up"></div>
        <div class="links grid__cell 1/4--lap-and-up">
          <nuxt-link class="link" to="/about-us">About Us</nuxt-link>
          <nuxt-link class="link" to="/services">Services</nuxt-link>
          <nuxt-link class="link" to="/our-clients">Our Clients</nuxt-link>
          <nuxt-link class="link" to="/hr-advice">HR Blog</nuxt-link>
        </div>
        <div class="contact grid__cell 1/4--lap-and-up">
          <div>
            <img src="~/assets/images/envelope-square-solid.svg" alt="Email" />
            <a href="mailto:kirsty@fivestarhr.com.au">kirsty@fivestarhr.com.au</a>
          </div>

          <div>
            <img src="~/assets/images/phone-square-solid.svg" alt="Phone" />
            <a href="tel://+61422634359">0422 634 359</a>
          </div>
          <div>
            <img src="~/assets/images/linkedin-brands.svg" alt="LinkedIn" />
            <a href="https://www.linkedin.com/in/kirsty-peters-cahri-880b663/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>


<style lang="scss" scoped>
.footer {
  color: white;
  padding: 2rem 0;
  background-color: #111;
}

.container {
  padding: 20px;
}

img {
  width: 25px;
  height: 25px;
  vertical-align: text-top;
}

.contact {
  .div {
    display: flex;
  }
}

.link {
  display: block;
}

.links {
  @include av-mq(lap-and-up) {
    padding-left: 100px;
  }
}

.grid__cell {
  padding-top: 20px;

  @include av-mq(lap-and-up) {
    padding-top: 0;
  }
}

a {
  color: white;
  text-decoration: none;
}
</style>
