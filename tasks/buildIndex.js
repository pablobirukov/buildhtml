var fs = require('fs'),
    dirName = './blocks/',
    jsdom = require("jsdom"),
    stringify = require('stringify-object'),
    async = require('async');

var getFirstCommentValueFromEl = function ($el) {
    var value = $el.contents().filter(function () {
        return this.nodeType === 8;
    }).get(0).nodeValue;
    return value ? value.trim() : '';
};

var getUTplFromEl = function ($el, $) {
    $el.contents().filter(function () {
        return this.nodeType === 8;
    }).remove();
    return $("<div />").append($el.clone()).html().replace(/\n/g, '').trim();
};

var index = {};
async.each(fs.readdirSync(dirName), function (fileName, callback) {
    var fileContent = fs.readFileSync(dirName + fileName, {encoding: 'utf8'});
    jsdom.env(fileContent,
        ['../bower_components/jquery/dist/jquery.js'],
        function (errors, window) {
            if (errors) {
                callback(errors);
            } else {
                var $ = window.$,
                    $block = $("[_\\:block]"),
                    blockName = $block.attr('_:block'),
                    blockDescription = getFirstCommentValueFromEl($block),
                    blockIndex = {params: {}};
                if (!blockDescription) {
                    return callback('Блок не задокументирован');
                }

                $block.removeAttr('_:block');
                blockIndex.description = blockDescription;

                $("[_\\:param]").each(function (i, e) {
                        var $e = $(e),
                            paramName = $(e).attr('_:param'),
                            paramDescription = getFirstCommentValueFromEl($e);
                        if (!paramDescription) {
                            return callback('Параметр не задокументирован');
                        }

                        $e.removeAttr('_:param').text('_:param:' + paramName);
                        blockIndex.params[paramName] = {
                            description: paramDescription
                        }
                    }
                )
                blockIndex.tpl = getUTplFromEl($block, $);
                index[blockName] = blockIndex;
                callback();
            }
        });
}, function (err) {
    if (err) {
        console.error(err);
    } else {
        fs.writeFileSync('./output/index.json', stringify(index, {singleQuotes: false}), {encoding: 'utf8'});
        fs.writeFileSync('./output/index.jsonp', 'var INDEX = ' + stringify(index, {singleQuotes: false}));
        console.log(stringify(index));
    }
});
