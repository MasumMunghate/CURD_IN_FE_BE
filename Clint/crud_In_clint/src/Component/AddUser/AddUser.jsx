import { Box, Button, Flex, FormLabel, Heading, Input } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Form, Link, useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();
  const Userformdata = {
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
  };
  const [formData, setFormData] = useState(Userformdata);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // API Fetch krna hai 
  const handleSubmit = async() => {
  const payload = {
    fname : formData.FirstName,
    lname : formData.LastName,
    email : formData.Email,
    password : formData.Password
  }
    const config = {
      method : "POST",
      url : "http://localhost:3000/api/create",
      data : payload
    }

    const response = await axios(config);
    toast.success(response.data.msg)
    navigate('/')
    console.log(response,"response");

  };
  return (
    <>
      <Link to="/">
        <Button>Go back to Home page</Button>
      </Link>
      <Flex justify="center" bg="lightgray" color="black" padding="2rem">
        <Form   >
          <FormLabel>First Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Yuour first Name"
            name="FirstName"
            onChange={handleChange}
          />
          <FormLabel>Last Name</FormLabel>
          <Input
            type="text"
            placeholder="Enter Yuour last  Name"
            name="LastName"
            onChange={handleChange}
          />
          <FormLabel>Email</FormLabel>
          <Input
            type="text"
            placeholder="Enter Yuour Email"
            name="Email"
            onChange={handleChange}
          />
          <FormLabel>Password</FormLabel>
          <Input
            type="text"
            placeholder="Enter Yuour Name"
            name="Password"
            onChange={handleChange}
          />

          <Input
            type="button"
            value="submit"
            mt="2rem"
            bg="black"
            color="white"
            onClick={handleSubmit}
          />
        </Form>
      </Flex>
    </>
  );
};

export default AddUser;
