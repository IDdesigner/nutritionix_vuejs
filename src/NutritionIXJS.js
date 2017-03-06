'use strict';

$(function() {
    $(".dial").knob();
});

$('.dial')
    .val(0)
    .trigger('change');