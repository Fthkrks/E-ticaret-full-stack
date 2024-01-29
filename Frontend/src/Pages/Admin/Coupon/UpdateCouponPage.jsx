import { Button,  Form,  Input, InputNumber, Spin, message } from "antd"
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

 
const UpdateCouponPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const params = useParams();
    const [form] = Form.useForm();
    const couponId = params.id;
    const apiUrl = import.meta.env.VITE_API_BASE_URL
    const navigate = useNavigate();


    
    
    const onFinish = async (values) =>{
        setIsLoading(true)
        try {
            const response = await fetch(`${apiUrl}/api/coupons/${couponId}`,{
                method: "PUT",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values)
            });
            if(response.ok){
                message.success("Kupon Güncelleme Başarılı")
                navigate("/admin/coupons")
            }else{
                message.error("Kupon güncelleme Başarısız")
            }
        } catch (error) {
            console.log(error);
            
        }finally{
            setIsLoading(false);
        }
    }



      useEffect(() =>{
        const fetchSingleCoupon = async ()=>{
            setIsLoading(true)
            try {
              const response = await fetch(`${apiUrl}/api/coupons/${couponId}`);
    
              if(!response.ok){
                throw new Error("data get error");
              }
    
              const data = await response.json();

    
              if(data){
                form.setFieldsValue({
                    code: data.code,
                    discountpercent: data.discountpercent
                })
              }
        
              
            } catch (error) {
              console.log(error);
              
            }finally{
              setIsLoading(false)
            }
          }
          fetchSingleCoupon();
      }, [apiUrl, couponId, form])


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
      label="Coupon Code"
      name="code"
      rules={[
        {
          required: true,
          message: 'Please input your  coupon code!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Coupon Discount"
      name="discountpercent"
      rules={[
        {
          required: true,
          message: 'Please input your  coupon discount!',
        },
      ]}
    >
      <InputNumber />
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

export default UpdateCouponPage