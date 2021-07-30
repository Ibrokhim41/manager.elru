import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Header from "./components/Header";
import Balance from "components/Balance";
import Example from "components/exmaple";
import Managers from "components/Managers";
import AddBook from "components/Orders/AddBook";
import EditBook from "components/Orders/EditBook";
import Categories from "components/Categories";
import AddCategory from "components/Categories/AddCategory";
import AddBooksFromCat from "components/Categories/AddBooksFromCat";
import EditCatigory from "components/Categories/EditCategory";
import BooksInCategory from "components/Categories/BooksInCategory";
import SmillarBooks from "components/Orders/SmillarBooks";

function App() {
  return (
    <div className="h-full bg-grey-bg">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/orders" component={Orders} />
          <Route path="/categories" component={Categories} />
          <Route path="/add-book" component={AddBook} />
          <Route path="/add-smillar-books" component={SmillarBooks} />
          <Route path="/balance" component={Balance} />
          <Route path="/managers" component={Managers} />
          <Route path="/edit-book" component={EditBook} />
          <Route path="/add-category" component={AddCategory} />
          <Route path="/edit-category" component={EditCatigory} />
          <Route path="/books-in-category" component={BooksInCategory} />
          <Route path="/add-books-from-cat" component={AddBooksFromCat} />
          <Route path="/example" component={Example} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
