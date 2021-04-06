<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/"
        ><img class="logo" src="/images/g-logo.svg" />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" class="nav-link" style="opacity: 1;"
            >Inicio</b-nav-item
          >
          <b-nav-item to="/login" class="nav-link">Link</b-nav-item>
          <b-nav-item href="#" class="nav-link">Link</b-nav-item>
          <b-nav-item href="#" class="nav-link">Link</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<style scoped>
.nav-link {
  color: white;
  opacity: 1;
}
.logo {
  height: 50px;
}
</style>
