import API from "../../store/api";
//import { bibleChapters } from "../../store/bibleData";
//Function to get the bible versions
export const getVersions = (setVersions, setValue, setVersionBooks) => {
  API.get("bibles")
    .then(function(response) {
      const versions = response.data;
      setVersions(versions);
      if (versions.length > 0) {
        setValue(
          "version",
          versions[0].languageVersions[0].language.name +
            "-" +
            versions[0].languageVersions[0].version.code.toUpperCase()
        );
        setValue("sourceId", versions[0].languageVersions[0].sourceId);
        for (let lang of versions) {
          for (let ver of lang.languageVersions) {
            getBooks(setValue, setVersionBooks, ver.sourceId);
          }
        }
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};
//Function to get reset the selected book and chapter
const resetBookData = setValue => {
  setValue("bookList", []);
  setValue("book", "Loading...");
  setValue("bookCode", "");
};
//Function to get the bible books
export const getBooks = (setValue, setVersionBooks, sourceId) => {
  //resetBookData(setValue);
  API.get("bibles/" + sourceId + "/books")
    .then(function(response) {
      var books = response.data[0].books.sort(
        (a, b) => a.bibleBookID - b.bibleBookID
      );
      setVersionBooks(sourceId, books);
      //setValue("bookList", books);
      setValue("book", books[0].bibleBookFullName);
      setValue("bookCode", books[0].abbreviation);
      setValue("chapter", "1");
      //getChapters(setValue, sourceId, books[0].abbreviation);
    })
    .catch(function(error) {
      console.log(error);
    });
};
//change the logic of this function
//dont send api call either hardcode it or put data in the get books calls
//Function to get the book chapters
/* export const getChapters = (
  setValue,
  sourceId,
  bookCode,
  setLastChapter,
  setChapter
) => {
  API.get("bibles/" + sourceId + "/books/" + bookCode + "/chapters")
    .then(function(response) {
      let chapters = response.data.sort(
        (a, b) => a.chapter.number - b.chapter.number
      );
      if (setChapter) {
        setChapter(chapters);
      } else {
        setValue("chapterList", chapters);
      }
      if (setLastChapter) {
        setValue("chapter", chapters.slice(-1)[0].chapter.number);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}; */
//Function to get the next chapter
export const nextChapter = (
  setValue,
  sourceId,
  chapterList,
  chapter,
  bookList,
  bookCode
) => {
  if (chapterList && chapterList[chapter]) {
    setValue("chapter", parseInt(chapter) + 1);
  } else {
    let nextBook = getNextBook(bookList, bookCode);
    if (nextBook) {
      setValue("book", nextBook.bibleBookFullName);
      setValue("bookCode", nextBook.abbreviation);
      setValue("chapter", "1");
      //getChapters(setValue, sourceId, nextBook.abbreviation);
    }
  }
};
//Function to get the next book
const getNextBook = (bookList, bookCode) => {
  for (let index in bookList) {
    if (bookCode === bookList[index].abbreviation) {
      if (bookList[parseInt(index) + 1]) {
        return bookList[parseInt(index) + 1];
      } else {
        return null;
      }
    }
  }
  return null;
};
//Function to get the previous chapter
export const previousChapter = (
  setValue,
  sourceId,
  chapterList,
  chapter,
  bookList,
  bookCode
) => {
  if (chapterList && chapterList[parseInt(chapter) - 2]) {
    setValue("chapter", parseInt(chapter) - 1);
  } else {
    let prevBook = getPrevBook(bookList, bookCode);
    if (prevBook) {
      setValue("book", prevBook.bibleBookFullName);
      setValue("bookCode", prevBook.abbreviation);
      //getChapters(setValue, sourceId, prevBook.abbreviation, true);
    }
  }
};
//Function to get the previous book
const getPrevBook = (bookList, bookCode) => {
  for (let index in bookList) {
    if (bookCode === bookList[index].abbreviation) {
      if (bookList[parseInt(index) - 1]) {
        return bookList[parseInt(index) - 1];
      } else {
        return null;
      }
    }
  }
  return null;
};
