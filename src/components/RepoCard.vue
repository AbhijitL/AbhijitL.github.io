<template>
  <div class="c">
    <div
      class="card text-center"
      style="max-height: auto"
      @click="$emit('selected', repoName)"
    >
      <div class="card-body">
        <h3 class="card-title">{{ repoName }}</h3>
        <p class="card-text" style="align-text: justify">
          {{ repoDescription }}
        </p>
        <a href="" target="_blank" class="stretched-link" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RepoCard",
  props: {
    repoName: String,
    repoDescription: String,
  },
};
</script>

<style scoped>
.c {
  padding: 5px;
}
</style>
