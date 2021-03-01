$(window).ready(function()
{
    console.log($(window).height())
    var h = $(window).height()
    var newh = parseInt(h-120)
    $('#goodscard').attr('style','height:' + newh + 'px;')
})
$(window).resize(function()
                            {
                                console.log($(window).height())
                                var h = $(window).height()
                                var newh = parseInt(h-120)
                                $('#goodscard').attr('style','height:' + newh + 'px;')
                            })



