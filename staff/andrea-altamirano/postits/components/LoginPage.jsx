function LoginPage(props) {
  logger.debug("LoginPage");

  const handleSubmit = function (event) {
    event.preventDefault();

    const emailInput = event.target.email;
    const passwordInput = event.target.password;

    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      authenticateUser(email, password, (error, token) => {
        if (error) {
          alert(error.message)

          return
        }

        logger.debug(`LoginPage -> authenticaterUser(${email}, ${password})`);

        sessionStorage.token = token

        props.onLoggedIn();
      });
      
    } catch (error) {
      alert(error.message);

      passwordInput.value = "";

      logger.warn(`LoginPage -> authenticateUser error: ${error}`);
    }
  };

  const handleLinkClick = (event) => {
    event.preventDefault();

    props.onGoToRegister();

    logger.debug("LoginPage -> handleLinkClickk");
  };

  return (
    <main
      className="bg-cover w-full h-full flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1473773508845-188df298d2d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80")`,
      }}
    >
      <h1 className="text-8xl font-bold text-red-200 mb-24">POSTITS</h1>
      <form action="" className="flex flex-col gap-5" onSubmit={handleSubmit}>
        <label className="text-xl text-neutral-100" htmlFor="email">
          E-mail
        </label>
        <input
          className="rounded-md border h-12"
          type="email"
          name="email"
          id="email"
        />

        <label className="text-xl text-neutral-100" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md border h-12 mb-8 w-64"
          type="password"
          name="password"
          id="password"
        />

        <button className="h-12 mb-20 rounded-md border-transparent bg-gradient-to-r from-pink-400 to-yellow-300 hover:from-purple-500 hover:to-fuchsia-300">
          Login
        </button>
      </form>

      <a
        className="text-lg text-neutral-100 underline"
        href=""
        onClick={handleLinkClick}
      >
        Register
      </a>
    </main>
  );
}
