import { Button,  Form,  Input, InputNumber, Select, Spin, message } from "antd"
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import {  useNavigate, useParams } from "react-router-dom";

 
const UpdateProductsPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    const [form] = Form.useForm();
    const productId = params.id;
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();


    useEffect(() =>{
      const fetchData = async ()=>{
          setIsLoading(true)
          
          try {
            
            const [categoriesResponse, singleProductsResponse] = await Promise.all([
              fetch(`${apiUrl}/api/categories`),
              fetch(`${apiUrl}/api/products/${productId}`)

            ])
      
            if(!categoriesResponse.ok || !singleProductsResponse.ok){
              message.error("Veri getirme başarısız")
              return;
          }

          const [categoriesData, singleProductsData] = await Promise.all([
              categoriesResponse.json(),
              singleProductsResponse.json()
          ]) 


          setCategories(categoriesData);


          if(singleProductsData){
              form.setFieldsValue({
                  name: singleProductsData.name,
                  current: parseInt(singleProductsData.price.current, 10),
                  discount: parseInt(singleProductsData.price.discount, 10),
                  description: singleProductsData.description,
                  img: singleProductsData.img.join("\n"),
                  colors: singleProductsData.colors.join("\n"),
                  sizes: singleProductsData.sizes.join("\n"),
                  category: singleProductsData.category
                  
              });


          }






      
            
          } catch (error) {
            console.log(error);
            
          }finally{
            setIsLoading(false)
          }
        }
        fetchData()
  }, [apiUrl, productId, form ])

    
    
    const onFinish = async (values) =>{
      console.log(values);
        setIsLoading(true)
        const imgLinks = values.img.split("\n").map((link) =>link.trim());
        const colors = values.colors.split("\n").map((link) =>link.trim());
        const sizes = values.sizes.split("\n").map((link) =>link.trim());
        try {
            const response = await fetch(`${apiUrl}/api/products/${productId}`,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  ...values,
                  price:{
                    current: values.current,
                    discount: values.discount
                  },
                  colors,
                  sizes,
                  img: imgLinks
                })
              });
            if(response.ok){
                message.success("Ürün Güncelleme Başarılı")
                navigate("/admin/products")
            }else{
                message.error("Ürün güncelleme Başarısız")
                return;
            }
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsLoading(false);
        }
    }




  

      return (
        <Spin spinning={isLoading}>
            <Form
            form={form}
                name="basic"
                layout="vertical"
                onFinish = {onFinish}
      >
        <Form.Item
          label="Product Name"
          name="name"
          rules={[
            {
              required: true,
              message: 'Please input your product name!',
            },
          ]}
        >
          <Input />
        </Form.Item>
    
        <Form.Item
          label="Product Category"
          name="category"
          rules={[
            {
              required: true,
              message: 'Please select a category!',
            },
          ]}
        >
    
          <Select>
            {categories.map((category) =>(
              <Select.Option value= {category._id} key={category._id}>{category.name}</Select.Option>
            ))}
          </Select>
        </Form.Item>
    
    
        <Form.Item
          label="Product Price"
          name="current"
          rules={[
            {
              required: true,
              message: 'Please input your product price!',
            },
          ]}
        >
          <InputNumber />
        </Form.Item>
    
    
          
        <Form.Item
          label="Product Discount"
          name="discount"
        >
          <InputNumber />
        </Form.Item>
    
    
        <Form.Item
          label="Product Description"
          name="description"
          rules={[
            {
              required: true,
              message: 'Please input your product description!',
            },
          ]}
        >
          <ReactQuill style={{backgroundColor: "white"}} />
        </Form.Item>
    
    
    
        <Form.Item
          label="Img"
          name="img"
          rules={[
            {
              required: true,
              message: 'Please input your 4 product colors!',
            },
          ]}
        >
          <Input.TextArea placeholder="please input 4 product colors" autoSize={{minRows: 4}} />
        </Form.Item>
    
    
        <Form.Item
          label="Colors"
          name="colors"
          rules={[
            {
              required: true,
              message: 'Please input your 4 product colors!',
            },
          ]}
        >
          <Input.TextArea autoSize={{minRows: 2}} />
        </Form.Item>
        <Form.Item
          label="Sizes"
          name="sizes"
          rules={[
            {
              required: true,
              message: 'Please input your product size!',
            },
          ]}
        >
          <Input.TextArea />
        </Form.Item>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <Form.Item
        >
          <Button type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
            </Form>
        </Spin>
      )
}

export default UpdateProductsPage