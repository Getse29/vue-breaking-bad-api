<template>
  <div
    class="card-item"
    v-if="name.includes(characterBreakingBad)"
  >
    <img :src="img" alt="woman" />
    <section class="card-content">
      <article class="card-info-profile">
        <div class="card-info-exact">
          <h2 class="card-title">
            {{ name }}
          </h2>
          <p class="card-status">
            {{ status }}
          </p>
        </div>
        <div>
          <h3 class="card-info-1">
            {{ nickname }}
          </h3>
          <h4 class="card-info-2">Occupation</h4>
        </div>
      </article>
    </section>
    <hr />
    <section class="card-ocuppation">
      <ul>
        <li
          v-for="(ocupation, index) in occupations"
          :key="index"
        >
          {{ ocupation }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
    img: {
      type: String,
    },
    status: {
      type: String,
    },
    nickname: {
      type: String,
    },
    occupations: {
      type: null,
    },
    characterBreakingBad: {
      type: String,
    },
  },
};
</script>
