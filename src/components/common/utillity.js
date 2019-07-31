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
        setValue("version", versions[0].languageVersions[0].version.name);
        setValue("sourceId", versions[0].languageVersions[0].sourceId);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
};
export const getBooks = (setValue, sourceId) => {
  API.get("bibles/" + sourceId + "/books")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    });
};
