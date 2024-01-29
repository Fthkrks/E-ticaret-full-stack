/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Popconfirm, Table, message } from "antd";
import { useCallback, useEffect, useState } from "react";


const UserPage = () => {

  const [dataSource, setDataSource] = useState([])

  const [isLoading, setIsLoading] = useState(false);

  const apiUrl = import.meta.env.VITE_API_BASE_URL


  const columns = [
    {
      title: 'Avatar',
      dataIndex: 'avatar',
      key: 'avatar',
      render: (imgSrc) =>(
        <img src={imgSrc} alt="avatar" style={{width: "80px", height: "80px", borderRadius: "100%"}}/>
      )
    },

    {
      title: 'Username',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Actions',
      dataIndex: 'actions',
      key: 'actions',
      render: (text, record) =>(
        <Popconfirm
        title="Delete the user"
        description="Are you sure to delete this user?"
        cancelText="No"
        okText="Yes"
        onConfirm={() =>{deleteUser(record.email)}}
      >
        <Button type="primary" danger>Delete</Button>
      </Popconfirm>

      )
    }
  ];

  

  const fetchUSers = useCallback(async ()=>{
    setIsLoading(true)
    try {
      const response = await fetch(`${apiUrl}/api/users`,);

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


  const deleteUser = async(userEmail) =>{
    try {
      const response = await fetch(`${apiUrl}/api/users/${userEmail}`,{
        method: "DELETE"
      })
      if(response.ok){
        fetchUSers();
        message.success("Silme işlemi başarılı.")
      }else{
        message.error("Silme işlemi başarısız.")
      }
    } catch (error) {
      console.log(error);


    }
  }



  useEffect(() =>{
    fetchUSers()
  }, [fetchUSers])


  return (
    <Table dataSource={dataSource} columns={columns} loading={isLoading} rowKey={(receord) => receord._id} />
  )
}

export default UserPage