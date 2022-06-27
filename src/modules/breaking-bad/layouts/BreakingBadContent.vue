<template>
  <main class="card-container">
    <template
      v-for="breakingBadCharacter in breakingBadCharacters"
      :key="breakingBadCharacter.char_id"
    >
      <BreakingBadCard
        :characterBreakingBad="characterBreakingBad"
        :name="breakingBadCharacter.name"
        :img="breakingBadCharacter.img"
        :status="breakingBadCharacter.status"
        :nickname="breakingBadCharacter.nickname"
        :occupations="breakingBadCharacter.occupation"
      />
    </template>
  </main>
</template>

<script>
import BreakingBadCard from './BreakingBadCard.vue';
export default {
  props: {
    breakingBadCharacters: {
      type: null,
      required: true,
    },
    characterBreakingBad: {
      type: null,
      default: '',
      required: true,
    },
  },
  components: { BreakingBadCard },
};
</script>
