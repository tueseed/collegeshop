function addproduct()
{
    var formData = new FormData()
    formData.append('command','add')
    formData.append('barcode',$('#barcode').val())
    formData.append('productName',$('#productName').val())
    formData.append('productPrice',$('#productPrice').val())
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
                $('#addproductcard').block({
                                        message: '<div class="spinner-border text-primary display-4" style="width: 4rem; height: 4rem;" role="status"><span class="sr-only">Loading...</span></div>',
                                        overlayCSS : { 
                                                        backgroundColor: '#ffffff',
                                                        opacity: 1
                                                    },
                                        css : {
                                            opacity: 1,
                                            border: 'none',
                                        }
                                        })
            },
            success: function(response) 
            {
                // var obj = JSON.parse(response)
                // var j =0;
                // while(obj[j])
                // {
                //     render_tech_card(obj[j])
                //     j++;
                // }
                // console.log(obj)
                console.log(response)
                // location.reload()      
            },
            complete :function()
            {
                $('#addproductcard').unblock()
                Swal.fire({
                    title: "เพิ่มข้อมูลสินค้าสำเร็จ",
                    type: 'success'
                  })
                   
            }					
        }) 
}