import { Button, Popconfirm, Space, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryPage = () => {

    const [isLoading, setIsLoading] = useState(false);
  
    const [dataSource, setDataSource] = useState([])
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL
  
  
   
    
    const columns = [
      {
        title: 'Image',
        dataIndex: 'img',
        key: 'img',
        render: (imgSrc) =>(
          <img src={imgSrc} alt="product" style={{width: "80px", height: "80px", borderRadius: "100%"}}/>
        )
      },
  
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) =>(
            <b>{text}</b>
        )
      }, 

      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (text, record) =>(
            <Space>
                <Button type="primary" onClick={() => navigate(`/admin/categories/update/${record._id}`)}>
                    Düzenle
                </Button>
                <Popconfirm
                    title="Delete the user"
                    description="Are you sure to delete this user?"
                    cancelText="No"
                    okText="Yes"
                    onConfirm={() =>{deleteCategory(record._id)}}
                >
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            </Space>

  
        )
      }
    ];
  
    
  
    const fetchCategory = useCallback(async ()=>{
      setIsLoading(true)
      try {
        const response = await fetch(`${apiUrl}/api/categories`,);
  
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
  
  
    const deleteCategory = async(categoryId) =>{
      try {
        const response = await fetch(`${apiUrl}/api/categories/${categoryId}`,{
          method: "DELETE"
        })
        if(response.ok){
          fetchCategory();
          message.success("Silme işlemi başarılı.")
        }else{
          message.error("Silme işlemi başarısız.")
        }
      } catch (error) {
        console.log(error);
  
  
      }
    }
  
  
  
    useEffect(() =>{
      fetchCategory()
    }, [fetchCategory])
  
  
    return (
      <Table dataSource={dataSource} columns={columns} loading={isLoading} rowKey={(receord) => receord._id} />
    )
  }
  

export default CategoryPage