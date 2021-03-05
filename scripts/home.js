var salelist = []
$(window).ready(function()
{
    console.log($(window).height())
    var h = $(window).height()
    var newh = parseInt(h-120)
    $('#goodscard').attr('style','height:' + newh + 'px;')
    $('#salescard').attr('style','height:' + newh + 'px;')
    
})
$(window).resize(function()
                            {
                                console.log($(window).height())
                                var h = $(window).height()
                                var newh = parseInt(h-120)
                                $('#goodscard').attr('style','height:' + newh + 'px;')
                                $('#salescard').attr('style','height:' + newh + 'px;')
                            })

$('#textsale').keypress(function(event){
                                            var keycode = (event.keyCode ? event.keyCode : event.which)
                                            if(keycode == '13'){
                                                queryProduct()
                                            }
                                        })
function queryProduct()
{
    var formData = new FormData()
    formData.append('command','queryProduct')
    formData.append('barcode',$('#textsale').val())
    $.ajax({
            url: 'api/api_product_all.php',
            method: 'POST',
            data:formData,
            async: true,
            cache: false,
            processData: false,
            contentType: false,
            beforeSend : function()
            {  
                $('#textsale').prop('disabled',true)
            },
            success: function(response) 
            {
                var obj = JSON.parse(response)
                
                
                // $('#productForsale').append(renderproduct(obj[0]))
                salelist.push(obj[0])
                $('#textsale').prop('disabled',false)
                $('#productForsale').empty()
                var j = 0
                var totalprice = 0
                while(salelist[j])
                {
                    $('#productForsale').append(renderproduct(salelist[j],j))
                    totalprice = parseFloat(totalprice) + parseFloat(salelist[j].productPrice)
                    j++
                }
                $('#productnums').html(j)
                $('#total').html(totalprice)
                console.log(totalprice)
                
            },
            complete :function()
            {
                
                $('#textsale').val('')
                $('#textsale').focus();
                
            }					
        }) 
}
function renderproduct(product,productnum)
{
    return[
    '<div class="row" style="border-bottom-style: solid;border-bottom-width: thin;">',
        '<div class="col-lg-1">',
            parseInt(productnum +1),
        '</div>',
        '<div class="col-lg-7">',
            product.productName,
        '</div>',
       
        '<div class="col-lg-2">',
            product.productPrice,
        '</div>',
        '<div class="col-lg-2">',
           '<i class="fas fa-trash fa-sm fa-fw mr-2 text-danger" onclick="delfromsale(' + productnum + ')"></i>',
        '</div>',
        '</div>'].join("")
}

function delfromsale(index)
{
    salelist.splice(index,1)
    $('#productForsale').empty()
    var j = 0
    var totalprice = 0
    while(salelist[j])
        {
            $('#productForsale').append(renderproduct(salelist[j],j))
            totalprice = parseFloat(totalprice) + parseFloat(salelist[j].productPrice)
            j++
        }
        $('#productnums').html(j)
        $('#total').html(totalprice)

}
console.log($('#productForsale').children().length)

