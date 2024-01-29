import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CouponPage = () => {

    const [isLoading, setIsLoading] = useState(false);
  
    const [dataSource, setDataSource] = useState([])
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL
  
  
   
    
    const columns = [
      {
        title: 'Coupon Code',
        dataIndex: 'code',
        key: 'code',
        render: (text) =>(
            <b>{text}</b>
        )
      }, 

      {
        title: 'Coupon Discount',
        dataIndex: 'discountpercent',
        key: 'discountpercent',
        render: (text) =>(
            <span>{text}%</span>
        )
      }, 

      { 
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (text, record) =>(
            <Space>
                <Button type="primary" onClick={() => navigate(`/admin/coupons/update/${record._id}`)}>
                    Düzenle
                </Button>
                <Popconfirm
                    title="Delete the user"
                    description="Are you sure to delete this user?"
                    cancelText="No"
                    okText="Yes"
                    onConfirm={() =>{deleteCoupon(record._id)}}
                >
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            </Space>

  
        )
      }
    ];
  
    
  
    const fetchCoupons = useCallback(async ()=>{
      setIsLoading(true)
      try {
        const response = await fetch(`${apiUrl}/api/coupons`,);
  
        if(response.ok){
          const data = await response.json();
          setDataSource(data)
  
  
        }
  
        
      } catch (error) {
        console.log(error);
        
      }finally{
        setIsLoading(false)
      }
    }, [apiUrl])
  
  
    const deleteCoupon = async(couponId) =>{
      try {
        const response = await fetch(`${apiUrl}/api/coupons/${couponId}`,{
          method: "DELETE"
        })
        if(response.ok){
            fetchCoupons();
          message.success("Silme işlemi başarılı.")
        }else{
          message.error("Silme işlemi başarısız.")
        }
      } catch (error) {
        console.log(error);
  
  
      }
    }
  
  
  
    useEffect(() =>{
        fetchCoupons()
    }, [fetchCoupons])
  
  
    return (
      <Table dataSource={dataSource} columns={columns} loading={isLoading} rowKey={(receord) => receord._id} />
    )
  }
  

export default CouponPage