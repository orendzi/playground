(function() {
    var link = $('link');
    $('button').on('click', function() {
        var $this = $(this), // stash or cash obj
            stylesheet = $(this).data('file');
            
        link.attr('href', 'stylesheets/' + stylesheet + '.css');
        
        $this
            .siblings('button')
                .removeAttr('disabled')
            .end()
            .attr('disabled', 'disabled');
    });
})(); 