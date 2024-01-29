import { Button, Popconfirm, Space, Table, message } from "antd";
import {  useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductsPage = () => {

    const [isLoading, setIsLoading] = useState(false);
  
    const [dataSource, setDataSource] = useState([])
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_API_BASE_URL
  
  
   
    
    const columns = [
      {
        title: 'Product Image',
        dataIndex: 'img',
        key: 'img',
        render: 
        (imgSrc) => <img src={imgSrc[0]} alt="product" style={{width: "100px"}}/>
        
      },
  
      {
        title: 'Product Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) =>(
            <b>{text}</b>
        )
      },
      {
        title: 'Category',
        dataIndex: 'categoryName',
        key: 'categoryName',
        render: (text) => <span>{text}</span>
      }, 
      {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{parseFloat(text.current).toFixed(2)}₺</span>
      }, 


      {
        title: 'Discount',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{parseFloat(text.discount).toFixed(2)}%</span>
      }, 

      {
        title: 'Actions',
        dataIndex: 'actions',
        key: 'actions',
        render: (text, record) =>(
            <Space>
                <Button type="primary" onClick={() => navigate(`/admin/products/update/${record._id}`)}>
                    Düzenle
                </Button>
                <Popconfirm
                    title="Delete the user"
                    description="Are you sure to delete this user?"
                    cancelText="No"
                    okText="Yes"
                    onConfirm={() =>{deleteProducts(record._id)}}
                >
                    <Button type="primary" danger>Delete</Button>
                </Popconfirm>
            </Space>

  
        )
      }
    ];
  
    
  

  
  
    const deleteProducts = async(productsId) =>{




      try {
        const response = await fetch(`${apiUrl}/api/products/${productsId}`,{
          method: "DELETE"
        })
        if(response.ok){
            setDataSource((prevDataSource) =>{
              return prevDataSource.filter((product) => product._id !== productsId)
            })
            message.success("Silme işlemi başarılı.")
        }else{
          message.error("Silme işlemi başarısız.")
        }
      } catch (error) {
        console.log(error);
  
  
      }
    }
  
  
  
    useEffect(() =>{
        const fetchData = async ()=>{
            setIsLoading(true)
            try {
              
              const [categoriesResponse, productsResponse] = await Promise.all([
                fetch(`${apiUrl}/api/categories`),
                fetch(`${apiUrl}/api/products`)

              ])
        
              if(!categoriesResponse.ok || !productsResponse.ok){
                message.success("Veri getirme başarısız")
            }

            const [categoriesData, productsData] = await Promise.all([
                categoriesResponse.json(),
                productsResponse.json()
            ]) 


            const productsWithCategories = productsData.map((product) =>{
                const categoryId = product.category;
                const category = categoriesData.find((item) => item._id === categoryId);
                console.log(categoriesData._id);


                return {
                    ...product,
                    categoryName: category ? category.name : ""
    
                };

            });

            
            setDataSource(productsWithCategories);



        
              
            } catch (error) {
              console.log(error);
              
            }finally{
              setIsLoading(false)
            }
          }
          fetchData()
    }, [apiUrl])
  
  
    return (
      <Table dataSource={dataSource} columns={columns} loading={isLoading} rowKey={(receord) => receord._id} />
    )
  }
  

export default ProductsPage