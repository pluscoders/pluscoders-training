const useState = React.useState;

function App() {
  const [view, setView] = useState(sessionStorage.userId ? "home" : "login");

  const goToHome = () => {
    setView("home");

    logger.debug("App -> goToHome");
  };

  if (view === "home") return <HomePage />;
}
