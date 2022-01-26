import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Orders from "./components/Orders";
import Header from "./components/Header";
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
import Authors from "components/Authors";
import EditAuthor from "components/Authors/EditAuthor";
import AddAuthor from "components/Authors/AddAuthor";
import EditBlocks from "components/EditBlocks";
import Users from "components/Users";
import MainPageBanners from "components/EditBlocks/MainPageBanners";
import Selections from "components/EditBlocks/Selections";
import AddSelection from "components/EditBlocks/Selections/AddSelection";
import EditSelection from "components/EditBlocks/Selections/EditSection";
import Tops from "components/EditBlocks/Tops";
import AddTop from "components/EditBlocks/Tops/AddTop";
import EditTop from "components/EditBlocks/Tops/EditTop";
import BookOfMonth from "components/EditBlocks/BookOfMonth";
import News from "components/EditBlocks/News";
import AddNews from "components/EditBlocks/News/AddNews";
import EditNews from "components/EditBlocks/News/EditNews";
import SocialLinks from "components/EditBlocks/SocialLinks";
import DiscountsPageBanners from "components/EditBlocks/DiscountsPageBanners";
import Chat from "components/Chat";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import data from "store/data";
import books from "store/books";


const App = observer(() => {
    // eslint-disable-next-line
    useEffect(() => {}, [data.loged]);

    useEffect(() => {
        data.refreshToken();
        // eslint-disable-next-line
    }, [data.refresh, books.refresh]);

    return (
        <div className="h-full bg-grey-bg">
            <Router>
                <Header />
                <Switch>
                    <Route path="/" component={Login} exact />
                    {sessionStorage.getItem("token") && (
                        <>
                            <Route path="/orders" component={Orders} />
                            <Route path="/categories" component={Categories} />
                            <Route path="/add-book" component={AddBook} />
                            <Route path="/edit-book" component={EditBook} />
                            <Route
                                path="/add-smillar-books"
                                component={SmillarBooks}
                            />
                            <Route path="/managers" component={Managers} />
                            <Route
                                path="/add-category"
                                component={AddCategory}
                            />
                            <Route
                                path="/edit-category/:id"
                                component={EditCatigory}
                            />
                            <Route
                                path="/books-in-category"
                                component={BooksInCategory}
                            />
                            <Route
                                path="/add-books-from-cat"
                                component={AddBooksFromCat}
                            />
                            <Route path="/authors" component={Authors} />
                            <Route path="/add-author" component={AddAuthor} />
                            <Route
                                path="/edit-author/:id"
                                component={EditAuthor}
                            />
                            <Route path="/edit-blocks" component={EditBlocks} />
                            <Route
                                path="/main-page-banners"
                                component={MainPageBanners}
                            />
                            <Route
                                path="/discounts-banners"
                                component={DiscountsPageBanners}
                            />
                            <Route path="/selections" component={Selections} />
                            <Route
                                path="/add-selection"
                                component={AddSelection}
                            />
                            <Route
                                path="/edit-selection"
                                component={EditSelection}
                            />
                            <Route path="/tops" component={Tops} />
                            <Route path="/add-top" component={AddTop} />
                            <Route path="/edit-top" component={EditTop} />
                            <Route
                                path="/book-of-month"
                                component={BookOfMonth}
                            />
                            <Route
                                path="/social-links"
                                component={SocialLinks}
                            />
                            <Route path="/news" component={News} />
                            <Route path="/add-news" component={AddNews} />
                            <Route path="/edit-news/:id" component={EditNews} />
                            <Route path="/users" component={Users} />
                            <Route path="/chat" component={Chat} />
                            <Route path="/example" component={Example} />
                        </>
                    )}
                </Switch>
            </Router>
        </div>
    );
});

export default App;
