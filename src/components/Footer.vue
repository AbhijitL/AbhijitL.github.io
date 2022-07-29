<template>
  <footer class="footer">
    <div class="container skinny-contain">
      <div class="row">
        <div class="col-12">
          <p class="mb-0">
            Made with ♥ by Abhijit Leihaorambam &copy;
            {{ new Date().getFullYear() }}. Contact: labhijitsingh13@gmail.com
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

/* ---------- Footer --------- */
footer {
  // margin-top: 128px;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
  font-size: 0.875rem;
  letter-spacing: 0;
  line-height: 1.4;
  border-top: 1px solid $gray-200;
  text-align: center;
}
</style>