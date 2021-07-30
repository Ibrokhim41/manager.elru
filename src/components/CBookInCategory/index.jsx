const BookInCategory = () => {
  const fakeArray = ["FatRat", "Kiffness", "Synapson"];

  const displayItems = fakeArray.map((book, i) => {
    return (
      <div key={i} className="flex">
        <div className="w-1/12 border border-grey-border flex items-center justify-center py-1">
          <input type="checkbox" className="cursor-pointer w-5 h-5" />
        </div>
        <div className="w-1/12 border border-grey-border flex items-center justify-center py-1 text-grey-dark ctext-sm font-medium">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpcvH11KPSLih420G7Eq3sLi7CRc0j6zzAnQ&usqp=CAU" alt="book_image" className="w-full h-full" />
        </div>
        <div className="w-4/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
          {book}
        </div>
        <div className="w-4/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
          Автор
        </div>
        <div className="w-2/12 border border-grey-border flex items-center pl-2 py-1 text-grey-dark ctext-sm font-medium">
        Бумажная, аудио,PDF
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="flex">
        <div className="w-1/12 border border-grey-border flex items-center justify-center py-1">
          <input type="checkbox" className="cursor-pointer w-5 h-5" />
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
      {displayItems}
    </>
  );
};

export default BookInCategory;
