import Gallery from "./Gallery";
import SearchForm from "./SearchForm";
import ThemeToggle from "./ThemeToggle";

const App = () => {
  return (
    <div className="container">
      <ThemeToggle />
      <SearchForm />
      <Gallery />
    </div>
  );
};
export default App;
