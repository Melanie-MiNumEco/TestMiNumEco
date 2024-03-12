module.exports = {
    tags: [
        "events"
    ],
    layout: "layouts/post.njk",
    permalink: function (data) {
        return `/${data.lang}/agenda/${data.page.fileSlug}/`;
    },
    eleventyComputed: {
        tagsUrl: "/agenda/tags/",
        start: data => data.page.date
    }
};
