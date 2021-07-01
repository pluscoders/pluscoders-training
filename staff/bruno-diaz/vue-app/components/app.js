const App = {
  el: "#app",
  router: new VueRouter(),
  template: `<main>
          <header id="header">
              <h1>Icon</h1>
              <span class="dropdownMenu" v-if="loggedIn" :class="{ dropdownMenu__opened: active }">
                  <span class="dropdownMenu__link" @click="active = !active">
                      Hola {{ username }}
                      <i class="fa fa-angle-down"></i>
                  </span>
                  <nav class="dropdownMenu__menu">
                      <div class="dropdownMenu__item">
                          Edit account
                          <i class="fa fa-pencil-square-o"></i>
                      </div>
                      <div class="dropdownMenu__item" @click="onLogout">
                          Log out
                          <i class="fa fa-sign-out"></i>
                      </div>
                  </nav>
              </span>
          </header>
  
          <access-view v-if="!loggedIn" @onLogin="onLogin" @onRegister="onRegister" :feedback="feedback" />
  
          <router-view></router-view>
      </main>`,

  router: new VueRouter({
    routes: [
      {
        path: "/",
        component: Home,
        name: "home",
      },
    ],
  }),

  data: {
    username: null,
    // feedback: "hola mundo",
    active: false,
    loggedIn: false || !!sessionStorage.token,
  },

  created() {
    if (!this.loggedIn) {
      this.$router.push({ path: "/login" });
    } else {
      retrieveUser(sessionStorage.token, (error, user) => {
        if (error) return (this.feedback = error.message);

        this.username = user.fullname;

        this.$router.push({ path: "/" }).catch(() => {});
      });
    }
  },

  props: ["feedback"],

  methods: {
    onLogin(email, password) {
      try {
        authenticateUser(email, password, (error, token) => {
          if (error) return this.feedback.push("Hola Mundo");
          // if (error) return (this.feedback = error.message);

          sessionStorage.token = token;

          this.loggedIn = true;

          retrieveUser(token, (error, user) => {
            // if (error) return (this.feedback = error.message);

            this.username = user.fullname;

            this.$router.push({ path: "/" });
          });
        });
      } catch (error) {
        this.feedback = error.message;
      }
    },

    onRegister(fullname, email, password) {
      try {
        registerUser(fullname, email, password, (error, token) => {
          if (error) return (this.feedback = error.message);

          authenticateUser(email, password, (error, token) => {
            if (error) return (this.feedback = error.message);

            sessionStorage.token = token;

            this.loggedIn = true;

            retrieveUser(token, (error, user) => {
              if (error) return (this.feedback = error.message);

              this.username = user.fullname;

              this.$router.push({ path: "/" });
            });
          });
        });
      } catch (error) {
        this.feedback = error.message;
      }
    },

    onLogout() {
      sessionStorage.clear();
      this.active = false;
      this.$router.push({ name: "login" });
    },
  },
};
