<template>
  <div class="<%= storyClass %>">
    <h1><%= storyName %></h1>
    <img alt="pug" src="https://images.unsplash.com/photo-1529088363398-8efc64a0eb95">
  </div>
</template>

<style lang="scss">
  @import './<%= storyName %>';
</style>

<script>
export default {
  name: '<%= storyName %><%= storyTypeSingular %>',
}
</script>
