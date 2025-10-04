const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {

  eleventyConfig.addCollection("post", (api) => api.getFilteredByTag("post"));
  // Копируем папку с изображениями
  eleventyConfig.addPassthroughCopy("images");

  // Copy css styles
  eleventyConfig.addPassthroughCopy("assets");

  eleventyConfig.addPlugin(pluginRss);

  // ✅ Кастомный фильтр даты без Luxon
  eleventyConfig.addFilter("dateFormat", function(date, locale = "ru-RU") {
    const d = (date instanceof Date) ? date : new Date(date);
    // Пример: "10 мая 2025 г."
    return d.toLocaleDateString(locale, {
      year: "numeric",
      month: "long",
      day: "2-digit"
    });
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
