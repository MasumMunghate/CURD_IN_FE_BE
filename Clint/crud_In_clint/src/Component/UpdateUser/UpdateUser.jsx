import { Box, Button, Flex, FormLabel, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Form, Link, useNavigate, useParams } from "react-router-dom";

const UpdateUser = () => {
  const navigate = useNavigate();
  const userdataUpdate = {
    fname: "",
    lname: "",
    email: "",
  };
  const [user, setUser] = useState(userdataUpdate);

  const { id } = useParams();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
      handleSubmit();
  }, [id]);

  const handleSubmit = async () => {
    const config = {
      method: "GET",
      url: `http://localhost:3000/api/getUserByID/${id}`,
    };
    const response = await axios(config);
    setUser(response?.data)
    console.log(response, "response");
  };

const onSubmitHandler = async()=>{
    const payload = {
      fname : user.fname,
      lname : user.lname,
      email: user.email
    }

    const config = {
      method : "PUT",
      url : `http://localhost:3000/api/EditUser/${id}`,
      data : payload
    }

    const response = await axios(config);
    toast.success(response.data.msg)

    navigate('/');
    
}

  return (
    <>
      <Heading>This is UpdateUser</Heading>
      <Flex justify="center" bg="lightgray" color="black" padding="2rem">
        <Form>
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            onChange={changeHandler}
            placeholder="Enter Yuour first Name"
            name="fname"
            value={user.fname}
          />
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            onChange={changeHandler}
            placeholder="Enter Yuour last  Name"
            name="lname"
            value={user.lname}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            onChange={changeHandler}
            placeholder="Enter Yuour Email"
            name="email"
            value={user.email}
          />

          <Input
            type="button"
            value="Update User"
            mt="2rem"
            bg="black"
            color="white"
            onClick={onSubmitHandler}
          />
        </Form>
      </Flex>
    </>
  );
};

export default UpdateUser;
