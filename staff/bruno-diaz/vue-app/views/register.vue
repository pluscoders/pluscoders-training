<template>
    <form id='registerForm' @submit.prevent="getRegister">
        <!-- <span v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
                <li v-for="error in errors">{{ error }}</li>
            </ul>
        </span> -->
        <span class="form__element">
            <label for="#fullname">Fullname</label>
            <input
                v-model="fullname"
                id="fullname"
                type="text"
                class="form__element--input"
                required
            >
        </span>
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
        <button type="submit" class='button button__cta'>Register</button>
    </form>
</template>


<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    data() {
        return {
            errors: [],
            fullname: null,
            email: null,
            password: null
        }
    },
    methods: {
        getRegister: function(event) {
            this.errors = []

            if (!this.fullname)
                this.errors.push("Write a fullname")
            
            if (!this.email) 
                this.errors.push('Write an email')
            else if (!this.validEmail(this.email))
                this.errors.push('Write a valid email')

            if (!this.password)
                this.errors.push("Write a password")
            else if (this.password.length < 6)
                this.errors.push('Write a password of at least 6 characters')

            if (!this.errors.length) return onRegister(fullname, email, password)
        },
        validEmail: function(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return re.test(email);           
        }
    }
    
})
</script>


<style scoped>

</style>
