import './AddProduct.css'
import { useState} from 'react'
import upload_area from '../../assets/hand_icon.png'


const AddProduct = () => {
    const [image,setImage] = useState(false);
    const [productDetails,setProductDetails] = useState({
        name:'',
        image:'',
        category: 'interior',
        price: '',
        description: '',

    });

    const imageHandler = (e)=>{
        setImage(e.target.files[0]);
    };

    const changeHandler = (e)=>{
        setProductDetails({...productDetails,[e.target.name]:e.target.value});
    };

    const Add_Product = async ()=>{
        console.log(productDetails);
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('http://localhost:4000/upload',{
            method: 'POST',
            headers:{
                Accept: 'application/json',
            },
            body: formData
        }).then((resp) =>resp.json()).then((data)=>{
            responseData = data;
        })
        if(responseData.success)
            {
            product.image = responseData.image_url;
            console.log(product);
            await fetch ('http://localhost:4000/addproduct',{
                method: 'POST',
                headers:{
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),

            }).then((resp) => resp.json()).then((data)=>{
                data.success?alert("Product Added Successfully"):alert("Product Not Added");
            }
            
       ) }
    };
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
            <p>Product Title</p>
            <input  value={productDetails.name} onChange={changeHandler}type="text" name='name' placeholder='Type Here' />

        </div>
        <div className="addproduct-price">
            <div className="addproduct-itemfield">
                <p>Price</p>
                <input value={productDetails.price} onChange={changeHandler}type="text" name='price' placeholder='Type Here' />
            </div>
        </div>
        
        <div className="addproduct-itemfield">
            <p>Product Category</p>
            <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector'>
                <option value="interior">Interior</option>
                <option value="exterior">Exterior</option>
                <option value="primers">Primers</option>
                <option value="finishes">Finishes</option>
            </select>
        </div>
        <div className="addproduct-itemfield">
                <p>Product Description</p>
                <input value={productDetails.description} onChange={changeHandler}type="text" name='description' placeholder='Type Here' />
            </div>
        <div className="addproduct-itemfield">
            <label htmlFor="file-input">
                <p>Upload area</p>
                <img src={image?URL.createObjectURL(image):upload_area} alt=""  className='addproduct-thumbnail-input'/>
            </label>
            <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
        </div>
      <button  onClick={()=>{Add_Product()}}className='addproduct-btn'> ADD</button>
    </div>
  )
}

export default AddProduct
