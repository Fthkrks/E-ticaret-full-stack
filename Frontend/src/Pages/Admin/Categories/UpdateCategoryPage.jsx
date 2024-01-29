import { Button,  Form,  Input, Spin, message } from "antd"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

 
const UpdateCategoryPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    const params = useParams();
    const categoryId = params.id;
    const apiUrl = import.meta.env.VITE_API_BASE_URL



    
    
    const onFinish = async (values) =>{
        setIsLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/categories/${categoryId}`,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            });
            if(response.ok){
                message.success("Kategori Güncelleme Başarılı")
            }else{
                message.error("Kategori güncelleme Başarısız")
            }
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsLoading(false);
        }
    }



      useEffect(() =>{
        const fetchSingleCategory = async ()=>{
            setIsLoading(true)
            try {
              const response = await fetch(`${apiUrl}/api/categories/${categoryId}`);
              console.log(categoryId);
    
              if(!response.ok){
                throw new Error("data get error");
              }
    
              const data = await response.json();

    
              if(data){
                form.setFieldsValue({
                    image: data.img,
                    name: data.name
                })
              }
        
              
            } catch (error) {
              console.log(error);
              
            }finally{
              setIsLoading(false)
            }
          }
          fetchSingleCategory();
      }, [apiUrl, categoryId, form])


  return (
    <Spin spinning={isLoading}>
        <Form
            form={form}
            name="basic"
            layout="vertical"
            autoComplete="off"
            onFinish = {onFinish}
  >
    <Form.Item
      label="Image"
      name="image"
      rules={[
        {
          required: true,
          message: 'Please input your image url!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Name"
      name="name"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
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

export default UpdateCategoryPage