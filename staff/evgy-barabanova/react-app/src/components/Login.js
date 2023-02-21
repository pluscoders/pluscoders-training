function Login(props) {
  const { onCredentialsSubmitted } = props

  const handleSubmit = event => {
    event.preventDefault()

    const { target: { email: { value: email }, password: { value: password } } } = event

    //console.log(email, password)

    onCredentialsSubmitted(email, password)
  }

  return <form onSubmit={handleSubmit}>
    <input type="email" name="email" placeholder="email" />
    <input type="password" name="password" placeholder="password" />
    <button>Login</button>
  </form>
}

export default Login
