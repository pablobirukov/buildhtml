var fs = require('fs'),
    dirname = './blocks/',
    jsdom = require("jsdom");

var getFirstCommentValueFromEl = function($el){
    var value = $el.contents().filter(function() {
        return this.nodeType === 8;
    }).get(0).nodeValue;
    return value ? value.trim() : '';
}

var files = fs.readdirSync(dirname).map(function (path) {
        jsdom.env({
            file: dirname + path,
            scripts: '../bower_components/jquery/dist/jquery.js',
            done: function (errors, window) {
                if (errors) {
                    console.error(errors);
                } else {
                    var $ = window.$,
                        $block = $("[_\\:block]"),
                        blockDescription = getFirstCommentValueFromEl($block);
                    if (!blockDescription) {
                        return console.error('Блок не задокументирован');
                    }
                    console.log("Block name: ", $block.attr('_:block'), ' | ', blockDescription);
                    $("[_\\:param]").each(function (i, e) {
                            var paramDescription = getFirstCommentValueFromEl($(e));
                            if (!paramDescription) {
                                return console.error('Параметр не задокументирован');
                            }
                            console.log('Parameter: ' + $(e).attr('_:param'), ' | ', paramDescription);
                        }
                    )
                }
            }
        });
    })
    ;
