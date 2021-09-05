// $('.box__li').each(function (i) {
//     $(this).attr('data-uid', i + 1);
// })
$('.ui-checkbox').on('click', function(e) {
    // console.log($(this));
    // console.log(e.target);
    var box_li = $(this).parents('.box__li');
    var title = $(this).text().trim();
    console.log(title)
    var dataId = box_li.attr('data-id');
    // var dataId = box_li.data('id');
    console.log(dataId);
    var box_filters_ul = $('.box-filters__ul');

    var dataId2 = box_filters_ul.find('li[data-id=' + dataId + ']');
    var len = dataId2.length;
    console.log(len)
    $('.box--filter').css('display', 'block')


    if (len > 0) {
        dataId2.remove();
    } else {
        var item = ' <li class="box-filters__li" data-id="' + dataId + '">' +
            '<button class="box-filters__button" onclick="removeItem(this)"></button>' +
            '<span class="box-filters__name">' + title + '</span>' +
            '</li>';
        box_filters_ul.append(item);
    }

})

$('.box-filters__clear').on('click', function(e) {
    e.preventDefault();
    $('.box-filters__li').remove();
    $('.ui-checkbox__input').each(function() {
        $(this).prop('checked', false);
    })
    $('.box--filter').css('display', 'none')

})

function removeItem(self) {
    console.log(self);
    var box_filters_li = $(self).parents('.box-filters__li');
    box_filters_li.remove();
    var dataId3 = box_filters_li.data('id');
    $('.box__li[data-id=' + dataId3 + ']').find('.ui-checkbox__input').prop('checked', false);
    if ($('.box-filters__li').length == 0) {
        $('.box--filter').css('display', 'none')
    }
}