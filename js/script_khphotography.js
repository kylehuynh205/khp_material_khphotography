(function (window, $) {
    $(function () {
        $('#aniimated-thumbnials').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150
        });

        $('#justifiied-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });

    });
}(window, jQuery));