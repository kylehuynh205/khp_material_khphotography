(function (window, $) {
    $(function () {
        $(document).ready(function () {
            $('#search-result-photostream').lightGallery({
                thumbnail: true,
                selector: 'a'
            }).justifiedGallery({
                "rowHeight": 150,
            });
        });


        $('#justifiied-photostream').lightGallery({
            thumbnail: true,
            selector: 'a'
        }).justifiedGallery({
            "rowHeight": 150,
        });

    });
}(window, jQuery));