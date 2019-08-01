import API from "../../store/api";
const parseVersions = versions => {
  return versions.reduce(function(lang, version) {
    let index = lang.findIndex(x => x.language === version.language.name);
    if (index === -1) {
      lang[lang.length] = {
        language: version.language.name,
        languageVersions: [version]
      };
    } else {
      lang[index].languageVersions.push(version);
    }
    return lang;
  }, []);
};
export const getVersions = setValue => {
  API.get("bibles")
    .then(function(response) {
      const versions = parseVersions(response.data);
      setValue("versions", versions);
      if (versions.length > 0) {
        setValue("version", versions[0].languageVersions[1].version.name);
        setValue("sourceId", versions[0].languageVersions[1].sourceId);
        getBooks(setValue, versions[0].languageVersions[1].sourceId);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};
const resetBookData = setValue => {
  setValue("bookList", []);
  setValue("book", "Loading...");
  setValue("bookCode", "");
};
export const getBooks = (setValue, sourceId) => {
  resetBookData(setValue);
  API.get("bibles/" + sourceId + "/books")
    .then(function(response) {
      var books = response.data[0].books.sort(
        (a, b) => a.bibleBookID - b.bibleBookID
      );
      setValue("bookList", books);
      setValue("book", books[0].bibleBookFullName);
      setValue("bookCode", books[0].abbreviation);
      setValue("chapter", "1");
    })
    .catch(function(error) {
      console.log(error);
    });
};
export const getChapters = (setValue, sourceId, bookCode) => {
  API.get("bibles/" + sourceId + "/books/" + bookCode + "/chapters")
    .then(function(response) {
      console.log(response);
      let chapters = response.data.sort(
        (a, b) => a.chapter.number - b.chapter.number
      );
      setValue("chapterList", chapters);
    })
    .catch(function(error) {
      console.log(error);
    });
};
