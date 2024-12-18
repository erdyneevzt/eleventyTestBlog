module.exports = function(eleventyConfig) {
  // Добавление коллекции постов
 eleventyConfig.addCollection("post", function(collectionApi) {
  return collectionApi.getFilteredByTag("post");
});

  // Копируем папку с изображениями
  eleventyConfig.addPassthroughCopy("images");

  // Copy css styles
  eleventyConfig.addPassthroughCopy("assets");

  return {
    dir: {
      input: ".",         // Корневая директория
      includes: "_includes",  // Директория для шаблонов
      output: "_site"     // Директория для сгенерированных файлов
    },
    htmlTemplateEngine: "njk", // Указываем Nunjucks для HTML
  };
};
