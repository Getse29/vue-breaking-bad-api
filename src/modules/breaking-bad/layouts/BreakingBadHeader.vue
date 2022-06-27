<template>
  <header>
    <h1 class="title">Breaking Bad Wiki</h1>
    <hr />
    <input
      type="text"
      name="search-bb"
      placeholder="Walter White"
      class="input-text"
      v-model="character"
      @input="$emit('searchCharacter', character)"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      character: '',
    };
  },
};
</script>
