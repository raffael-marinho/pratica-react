import MyComponent from "./components/YourFistComponent";
import Gallery from "./components/importAndExportComponent/Gallery";
import Profile from "./components/importAndExportComponent/Profile";
import TodoList from "./components/javaScriptInJSXWithCurlyBraces";
import Bio from "./components/writingMarkupWithJSX";

function App() {
  return (
    <div>
      <MyComponent />
      <Gallery />
      <Profile />
      <Bio />
      <TodoList />
    </div>
  );
}

export default App;
