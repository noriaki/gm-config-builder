/// -*- mode: javascript; coding: utf-8 -*-
;
function ConfigBuilder() { this.init.apply(this, arguments); };
jQuery.extend(ConfigBuilder, {
    defaults: {
        key: 'config'
    },
    id_prefix: 'gm_config_builder_',
    class_prefix: 'gm-config-builder-',

    scaffold: function() {
        var elm = $('<div />').attr({ id: ConfigBuilder.id_prefix + 'container' })
        .addClass(ConfigBuilder.class_prefix + 'container')
        .append(
            $('<ul />')
        )
        .append(
            $('<div />')
        );
        return elm;
    },

    build: function(option) {
        // TODO
    },

    CheckBox: function() { this.init.apply(this, arguments); },
    RadioBox: function() { this.init.apply(this, arguments); }
});
jQuery.extend(ConfigBuilder.prototype, {
    init: function(options) {
//        this.options = jQuery.extend({}, ConfigBuilder.defaults, options);
        this.helper = new ConfigHelper({
            key: this.options.key
        });
        this.element = ConfigBuilder.scaffold();
        var self = this;
        jQuery.each(options, function(i) {
            $('<li><a href="#' + ConfigBuilder.id_prefix + this.id + '"><span>' + this.name + '</span></a></li> ')
            .appendTo($('ul', self.element));
            var div = $('<div id="' + this.id + '" />');
            jQuery.each(this.contents, function(j) {
                div.append(ConfigBuilder.build(this));
            });
        });
    },

    open: function() {
        console.log(this);
    },

    close: function() {

    }
});

// CheckBox
jQuery.extend(ConfigBuilder.CheckBox.prototype, {
    init: function(options) {
        this.options = jQuery.extend({}, options);
        this.elem = $('<p />')
        .append(
            $('<input type="checkbox" />')
            .attr({
                id: ConfigBuilder.id_prefix + options.id
            })
            .click(function(e) {
                value = $(this).attr('checked') ? true : false;
            })
        )
        .append(
            $('<label />')
            .attr('for', options.id)
            .text(options.label)
        );
    }
});

// RadioBox
jQuery.extend(ConfigBuilder.RadioBox.prototype, {
    init: function(options) {

    }
});
