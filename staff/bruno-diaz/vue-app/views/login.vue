<template>
    <form id='loginForm' @submit.prevent="getLogin">
        <!-- <span v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </span> -->
        <span class="form__element">
            <label for="#email">Email</label>
            <input
                v-model="email"
                id="email"
                type="email"
                class="form__element--input"
                required
            >
        </span>
        <span class="form__element">
            <label for="#password">Password</label>
            <input
                v-model="password"
                id="password"
                type="password"
                class="form__element--input"
                required
            >
        </span>
        <button type="submit" class='button button__cta'>Log in</button>
    </form>
</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data() {
        return {
            errors: [],
            email: null,
            password: null
        }
    },
    methods: {
        getLogin() {
            this.errors = []

            try {
                authenticateUser(this.email, this.password, function(feedback, token) {
                    if (feedback === null) {
                        sessionStorage.token = token
                        
                        retrieveUser(token, function(feedback, user) {
                            if (feedback === null) {
                                _session = true
                                router.push({ name: "home" })
                                // goToSessionScreen(user)
                            } else {
                                this.errors.push(feedback.message)
                            }
                        })
                    } else {
                        this.errors.push(error)
                    }
                })
            } catch(error) {
                this.errors.push(error)
            }
        }
    }
    
})
</script>


<style scoped>

</style>
