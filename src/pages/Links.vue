<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <div class="breadcrumb">
            <div class="breadcrumb-item">
              <a title="Link back to home" href="/">Home</a>
            </div>
            <div class="breadcrumb-item">{{ $metaInfo.title }}</div>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="col-lg-12 gx-3">
          <div class="row">
            <h3>Contact me @ labhijitsingh13@gmail.com</h3>
          </div>
          <div class="row">
            <p>Social links:</p>
          </div>
          <social-links />
          <hr class="my-1" />
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import SocialLinks from "@/components/SocialLinks.vue";
export default {
  metaInfo() {
    return {
      title: "Contact",
    };
  },
  components: {
    SocialLinks,
  },
};
</script>
