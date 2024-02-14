module.exports = {
    tags: [
        "posts"
    ],
    layout: "layouts/post.njk",
    permalink: function (data) {
        return `/${data.lang}/actualites/${data.page.fileSlug}/`;
    },
    eleventyComputed: {
        tagsUrl: "/actualites/tags/"
    }
};
