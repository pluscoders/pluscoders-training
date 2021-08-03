<template>
  <main>
    <section id="searchComponent">
      <h2 class="searchComponent__title">Start to look for all you want</h2>
      <form class="searchComponent__form" @submit.prevent="searchByQuery">
        <select v-model="searcher" class="searchComponent__select">
          <!-- <option :v-for="option in options" :value="option.value">
            {{ option.label }}
          </option> -->
          <option value="all">All</option>
          <option value="google">Google</option>
          <option value="yahoo">Yahoo</option>
          <option value="bing">Bing</option>
        </select>
        <input type="text" v-model="query" class="searchComponent__input" />
        <button type="submit" class="button button__cta">Search</button>
      </form>
    </section>

    <section id="resultsWrapper" v-if="resultsList">
      <ul>
        <!-- <li v-for="resultItem in resultsList" class="resultsItem">
          <a :href="resultItem.url" target="_blank">
            <p class="resultsItem__title">{{ resultItem.title }}</p>
            <p class="resultsItem__preview">{{ resultItem.preview }}</p>
          </a>
        </li> -->
      </ul>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      searcher: "all",
      // options: [
      //   { value: "all", label: "All" },
      //   { value: "google", label: "Google" },
      //   { value: "yahoo", label: "Yahoo" },
      //   { value: "bing", label: "Bing" },
      // ],
      query: "",
      page: undefined,
      resultsList: [],
    };
  },

  methods: {
    async searchByQuery() {
      console.log('BUSCAR...')
    //   try {
    //     this.resultsList = [];

    //     if (!this.page) this.page = 1;

    //     if (this.searcher === "google" || this.searcher === "all") {
    //       var { results, page } = await searchInGoogle(this.query, this.page);
    //       results.forEach(element => this.resultsList.push(element));
    //     }

    //     if (this.searcher === "yahoo" || this.searcher === "all") {
    //       var { results, page } = await searchInYahoo(this.query, this.page);
    //       results.forEach(element => this.resultsList.push(element));
    //     }

    //     if (this.searcher === "bing" || this.searcher === "all") {
    //       var { results, page } = await searchInBing(this.query, this.page);
    //       results.forEach(element => this.resultsList.push(element));
    //     }

    //     return this.resultsList;

    //   } catch (error) {
    //     alert(error);
    // }
    },
  },
};
</script>

<style scoped lang="scss">
  #searchComponent {
    padding: 80px 0 40px;
    margin: 0 16px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
  }

  .searchComponent__title {
    font-size: 22px;
    position: relative;
    height: 54px;
    width: 281px;
    margin: 16px auto;
    opacity: .6;
  }

  .searchComponent__form {
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: centeR;
    align-items: center;
  }

  .searchComponent__select,
  .searchComponent__input {
    height: 32px;
    padding: 0 8px;
  }

  .searchComponent__select {
    width: 100px;
  }

  .searchComponent__input {
    width: 100%;
    max-width: 300px;
    margin: 0 8px;
  }

  #resultsWrapper {
    width: 90%;
    max-width: 991px;
    margin: 0 auto;
  }

  .resultsItem {
    margin: 24px 0;
  }

  .resultsItem__title {
    font-size: 20px;
    color: Teal;
    margin: 8px 0;
  }

  .resultsItem__preview {
    font-size: 14px;
    opacity: .8;
  }
</style>