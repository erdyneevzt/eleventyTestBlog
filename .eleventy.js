const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  // Добавление коллекции постов
 eleventyConfig.addCollection("post", function(collectionApi) {
  return collectionApi.getFilteredByTag("post");
});

  // Копируем папку с изображениями
  eleventyConfig.addPassthroughCopy("images");

  // Copy css styles
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addPlugin(pluginRss);
  
  // Добавляем новый фильтр для форматирования даты (убираем время)
  const { DateTime } = require("luxon"); // Подключаем библиотеку Luxon

  eleventyConfig.addFilter("dateFormat", function(date) {
    return DateTime.fromJSDate(date).toFormat("yyyy/MM/dd"); // Формат без времени
  });
  
  return {
    dir: {
      input: ".",         // Корневая директория
      includes: "_includes",  // Директория для шаблонов
      output: "_site"     // Директория для сгенерированных файлов
    },
    htmlTemplateEngine: "njk", // Указываем Nunjucks для HTML
  };
};
