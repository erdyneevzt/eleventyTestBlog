module.exports = function(eleventyConfig) {
  // Добавление коллекции постов
 eleventyConfig.addCollection("post", function(collectionApi) {
 const posts = collectionApi.getFilteredByTag("post");
  console.log("Посты в коллекции:", posts.map(post => post.data.title)); // Вывод в консоль
  return posts;
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
    markdownTemplateEngine: "njk", // Движок для Markdown-файлов
    dataTemplateEngine: "njk", // Движок для данных (например, YAML или JSON)
  };
};
