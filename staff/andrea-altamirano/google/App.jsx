const useState = React.useState;

function App() {
  const [view, setView] = useState("home");

  if (view === "home") return <HomePage />;
}
