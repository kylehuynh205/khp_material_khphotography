(function (window, $) {
    $(function () {
        $('#search-result-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 180,
        });

        $('#album-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });

        $('#justifiied-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });
        $('#byuser-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });




    });
}(window, jQuery));