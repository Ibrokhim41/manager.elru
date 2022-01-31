import { useEffect, useState } from "react";
import { observer } from 'mobx-react-lite';
import books from "../../store/books";
import categories from "../../store/categories";

const BookInCategory = observer(() => {

  const [selected, setSelected] = useState([])
  const [allId, setAllId] = useState([])

  useEffect(() => {
    books.fetchBooks();
    setSelected(categories.booksId)
    books.data.forEach((book) => setAllId(allId.concat(book.id)))
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    categories.addBooksId(selected)
    // eslint-disable-next-line
  }, [selected, books.data])


  return (
    <>
      <div className="flex">
        <div className="w-1/12 border border-grey-border flex items-center justify-center py-1">
          <input 
            onChange={(e) => {
              e.currentTarget.checked ? setSelected(allId) : setSelected([]);
            }}
            type="checkbox" className="cursor-pointer w-5 h-5" />
        </div>
        <div className="w-1/12 border border-grey-border flex items-center justify-center py-1 text-grey-dark ctext-sm font-medium">
          Фото
        </div>
        <div className="w-4/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
          Название
        </div>
        <div className="w-4/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
          Автор
        </div>
        <div className="w-2/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
          Форматы
        </div>
      </div>
      {books.data.length ? books.data.map((book) => {
        return (
          <div key={book.id} className="flex">
            <div className="w-1/12 border border-grey-border flex items-center justify-center py-1">
              <input
                checked={selected.includes(book.id)}
                onChange={(e) => {
                  e.currentTarget.checked ? setSelected(selected.concat(book.id)) : setSelected(selected.filter(id => id !== book.id))
                }}
                type="checkbox" className="cursor-pointer w-5 h-5" />
            </div>
            <div className="w-1/12 border border-grey-border flex items-center justify-center py-1 text-grey-dark ctext-sm font-medium">
              <img src={book.image} alt="book_image" className="w-full h-full" />
            </div>
            <div className="w-4/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
              {book.title_ru}
            </div>
            <div className="w-4/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
              {book.author.name_ru}
            </div>
            <div className="w-2/12 border border-grey-border flex flex-col justify-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
              {book.form.map((item, i) => {
                return (
                  <div key={i}>
                    {item === "paper" ? "Бумажная" : item === "audio" ? "Аудио" : "Электронная"}
                  </div>
                )
              })}
            </div>
          </div>
        );
      }) : "No Books"}
    </>
  );
});

export default BookInCategory;
