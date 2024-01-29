import { Button,  Form,  Input, Spin, message } from "antd"
import { useState } from "react";


 
const CreateCategoryPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [form] = Form.useForm();
    const apiUrl = import.meta.env.VITE_API_BASE_URL



    
    
    const onFinish = async (values) =>{
        setIsLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/categories`,{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            });
            if(response.ok){
                message.success("Kategori Oluşturma Başarılı")
                form.resetFields();
            }else{
                message.error("Kategori Oluşturma Başarısız")
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
      label="Image"
      name="img"
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
        Create
      </Button>
    </Form.Item>
        </Form>
    </Spin>
  )
}

export default CreateCategoryPage