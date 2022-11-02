function discord(app) {
    app.search.title.style.display = 'block';
    app.search.title.textContent = 'Discord Server';
    app.search.input.style.display = 'none';
    app.main.support = app.createElement(
        'div',
        [
            app.createElement('section', [
                app.createElement('p', 'You are being taken to the Plooshi Incognito discord server (<a href="/load.html#aHR0cHM6Ly9kaXNjb3JkLmdnLzRQMkFnQlBZeHc%3D">https://discord.gg/4P2AgBPYxw</a>).', {
                    style: {
                        'margin-bottom': '0'
                    }
                }),
                app.createElement('p', 'Are you sure you want to <a href="/load.html#aHR0cHM6Ly9kaXNjb3JkLmdnLzRQMkFnQlBZeHc%3D">proceed</a>?', {
                    style: {
                        'margin-bottom': '0'
                    }
                }),
            ], {
                class: 'data-section'
            }),

        ]);
    app.search.back.style.display = 'inline';
    app.search.back.setAttribute(
        'onclick',
        '(' + (function () {
            window.location.hash = '';
        }).toString() + ')();'
    )
};

export { discord };