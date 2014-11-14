module.exports = function (selleck) {
    var Handlebars = selleck.handlebars,
        require = selleck.require,
        marked = require('marked'),
        renderer = new marked.Renderer();

    Handlebars.registerHelper('json', function (context) {
        return new Handlebars.SafeString('```json\n' + JSON.stringify(context, null, 4) + '\n```\n');
    });

    Handlebars.registerHelper('sidebar', function () {
        var html = [],
            collections = this.collections,
            name = this.name,
            href,
            relativePath = name ? '../' : '',
            HTML_SUFFIX_RE = /\.html$/;

        html.push('<div class="book-toc">');
        Object.keys(collections).forEach(function (collectionName) {
            var collection = collections[collectionName];
            html.push('<div class="heading"><a class="level-0 active">' + collectionName + '</a></div><ul>');
            collection.forEach(function (book) {
                html.push('<div class="heading">' + book.book + '</div><ul>');
                book.chapters.forEach(function (chapter) {
                    href = chapter.href;
                    if (!href.match(HTML_SUFFIX_RE)) {
                        href += '/index.html';
                    }
                    html.push('<li><a href="' + relativePath + href + '">' + chapter.name + '</a></li>');
                });
                html.push('</ul>');
            });
        });
        html.push('</div>');
        return new Handlebars.SafeString(html.join('\n'));
    });

    Handlebars.registerHelper('home_url', function () {
        var name = this.name,
            relativePath = name ? '../' : './';
        return new Handlebars.SafeString(relativePath + 'index.html');
    });

    Handlebars.registerHelper('md', function (options) {
        var str = options.fn(this);
        return new Handlebars.SafeString(marked(str, { renderer: renderer }));
    });
};
