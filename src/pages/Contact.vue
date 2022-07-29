<template>
  <Layout>
    <div class="container skinny-contain">
      <div class="row">
        <div class="col">
          <h1>Say Hello</h1>
          <p class="mb-4">
            Please reach out and I'll do my best to get back to you asap.
          </p>
          <form>
            <div class="mb-3"></div>
            <label>Name</label>
            <div class="mb-3"></div>
            <input
              type="text"
              v-model="name"
              name="name"
              class="form-control"
              aria-required="true"
              aria-invalid="false"
              placeholder="Your Name"
            />
            <div class="mb-3"></div>
            <label>Email</label>
            <div class="mb-3"></div>
            <input
              type="email"
              v-model="email"
              name="email"
              class="form-control"
              aria-required="true"
              aria-invalid="false"
              placeholder="Your Email"
            />
            <div class="mb-3"></div>
            <label>Message</label>
            <div class="mb-3"></div>
            <textarea
              name="message"
              v-model="message"
              cols="30"
              rows="5"
              class="form-control"
              aria-required="true"
              aria-invalid="false"
              placeholder="Message"
            >
            </textarea>
            <div class="mb-3"></div>
            <input class="btn btn-outline-dark" type="submit" value="Send" />
            <div class="mb-3"></div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import emailjs from "emailjs-com";

export default {
  metaInfo() {
    return {
      title: "Contact",
    };
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    sendEmail(e) {
      try {
        emailjs.sendForm(
          "service_5xsmvlk",
          "template_8q23hbb",
          e.target,
          "14_3HkyPxHqOl2eHg",
          {
            name: this.name,
            email: this.email,
            message: this.message,
          }
        );
      } catch (error) {
        console.log({ error });
      }
      // Reset form field
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
