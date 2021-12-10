import { toast } from "react-toastify";

export const addToCart = (id,name, image,price,cateId)=>{
    let cartStorage = localStorage.getItem('cart')
    let screenCart = null;
    if(cartStorage == null){
        screenCart=[]
    }else{
        screenCart= JSON.parse(cartStorage)
        console.log(screenCart)
    }
    let item= {
        id: id,
        name: name,
        images: image,
        price: price,
        cateId: cateId,
        // cate_name: cate_name
    };
    let existed = screenCart.findIndex(data=>data.id == item.id);
    if(existed ==-1){
        item.quanity= 1
        screenCart.push(item)
    }else{
        console.log(screenCart);
        screenCart[existed].quanity++;
    }
    console.log(item)
    localStorage.setItem('cart', JSON.stringify(screenCart))
    toast("thêm vào giỏ hàng thành công")
}
