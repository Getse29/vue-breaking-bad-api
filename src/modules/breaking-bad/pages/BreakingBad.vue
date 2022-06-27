<script>
import BreakingBadHeader from '../layouts/BreakingBadHeader.vue';
import BreakingBadContent from '../layouts/BreakingBadContent.vue';
import { getBreakingBadApi } from '../services/api';

export default {
  components: {
    BreakingBadHeader,
    BreakingBadContent,
  },
  data() {
    return {
      breakingBadCharacters: null,
      characterBreakingBad: '',
      resultCharacter: null,
      characters: [],
    };
  },
  methods: {
    receiveCharacter(character) {
      return (this.characterBreakingBad = character);
    },
  },
  mounted() {
    getBreakingBadApi()
      .then(res => (this.breakingBadCharacters = res))
      .catch(console.log);
  },
};
</script>

<template>
  <div class="container">
    <BreakingBadHeader
      @searchCharacter="receiveCharacter"
    />

    <BreakingBadContent
      :breakingBadCharacters="breakingBadCharacters"
      :characterBreakingBad="characterBreakingBad"
    />
    <template> asdasdasd </template>
  </div>
</template>

<style>
.container {
  width: 90%;
  margin: 0 auto;
}

.title {
  font-size: 3rem;
  text-align: center;
  margin: 0.6em 0 0.3em;
}

hr {
  margin: 1em;
  border: 0.5px solid rgb(226, 226, 226);
}

.input-text {
  box-sizing: border-box;
  width: 100%;
  padding: 0.5em 0.8em;
}

.container-card {
  margin: 0 auto;
}

.card-item {
  box-shadow: 1px 3px 10px -2px rgba(0, 0, 0, 1);
  margin: 2.5em 0;
  border-radius: 5px 5px 5px 5px;
}

.card-info-profile {
  padding: 0 1.5em;
  margin: 0.8em 0;
}

.card-info-exact {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-title {
  font-size: 2rem;
  margin: 0;
}

.card-info-1,
.card-info-2 {
  font-size: 1.4rem;
  margin: 0.7em 0 0;
}

.card-info-1 {
  font-weight: 400;
}

.card-info-2 {
  font-weight: 300;
}

.card-status {
  padding: 0.5em 1em;
  border-radius: 2px;
  color: white;
  background-color: rgb(13, 128, 55);
}

.card-ocuppation {
  font-weight: 600;
  font-size: 1.3rem;
  line-height: 1.7em;
  padding-bottom: 0.2em;
}

@media (min-width: 640px) {
  .card-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .card-item {
    margin-right: auto;
    margin-left: auto;
    width: 47%;
  }
}

@media (min-width: 1024px) {
  .card-item {
    width: 31.5%;
  }
}
</style>
