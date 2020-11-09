let SIDEBAR = Object.create(null);

module.exports = (options, ctx) => ({
    name: "sidebar",
    ready() {

        const minContentLength = 0;

        const rootNode = {
            children: []
        };

        const sortedPages = ctx.pages
            .sort((a, b) => {
                if (a.path > b.path) return 1;
                if (b.path > a.path) return -1;
                return 0;
            });

        for (const page of sortedPages) {

            if (page.frontmatter && page.frontmatter.draft) {
                console.log('Excluding "' + page.path + "' because it's still in draft.");
                continue;
            }

            // Remove first '/'.
            const pagePath = page.path.substring(1);

            if (pagePath.indexOf('/') > -1 && page.content && page.content.length > minContentLength) {
                addNode(rootNode, pagePath, page);
            }
        }
    
        SIDEBAR = rootNode.children;
    },
    enhanceAppFiles() {
        return {
            name: "sidebar-replace",
            content: `export default ({ siteData, options }) => { siteData.themeConfig.sidebar = ${JSON.stringify(SIDEBAR)} }`
        }
    }
});

function addNode(parentNode, path, page) {

    const separatorIndex = path.indexOf('/');
    if (separatorIndex > 0) {

        const nodeName = path.substring(0, separatorIndex);

        let node = parentNode.children.find(n => n.name === nodeName);
        if (!node) {
            node = {
                name: nodeName,
                title: beautifyTitle(nodeName),
                children: []
            };
            parentNode.children.push(node);
        }

        addNode(node, path.substring(separatorIndex + 1), page);

    } else if (page.relativePath.endsWith('index.md')) {
        // If we've found an index page, add it to the front of the children array.
        parentNode.children.unshift(page.path);
    } else {
        parentNode.children.push(page.path);
    }
}

function beautifyTitle(title, topLevel) {
    // Remove digits from start of title.
    title = title.replace(/^\d+/, '');
    // Replace hyphens with spaces.
    title = title.replace(/-/g, ' ').trim();
    // Add whitespace around ampersands.
    title = title.replace(/(\S)&(\S)/g, '$1 & $2');

    return topLevel ? title.toUpperCase() : sentenceCase(title);
}

function sentenceCase(title) {
    title = title[0].toUpperCase() + title.substring(1).toLowerCase();

    // Make all 2-letter words uppercase.
    title = title.replace(/\b(\w{2})\b/g, function (x) {
        return x.toUpperCase();
    });

    return title;
}
