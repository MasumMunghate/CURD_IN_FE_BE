import {
  Box,
  Button,
  Heading,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Flex,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const GetUser = () => {
  const [showData, setShowData] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    const config = {
      method: "GET",
      url: "http://localhost:3000/api/getAllUser",
    };

    const response = await axios(config);
    setShowData(response?.data);
  };

  const deleteUser = async(_id)=>{
    console.log("Click");
    const config = {
        method : "DELETE",
        url : `http://localhost:3000/api/deleteUser/${_id}`
      }
      const response = await axios(config);
      setShowData((prevData)=> prevData.filter((userID)=> userID._id != _id))
      toast.success(response.data.msg)
      console.log(response,"response");
  }

  return (
    <>
      <Link to="/add">
        <Button>Add User</Button>
      </Link>
      <Flex justify="center" direction="column" align="center">
        <Heading> all user</Heading>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Sr No.</Th>
                <Th>First Name </Th>
                <Th>Last Name</Th>
                <Th>Email</Th>
                <Th>Password</Th>
              </Tr>
            </Thead>
            <Tbody>
              {showData?.map((items, index) => {
                const { _id, fname, lname, email } = items;
                return (
                  <Tr key={_id}>
                    <Td>{index + 1}</Td>
                    <Td>{fname}</Td>
                    <Td>{lname}</Td>
                    <Td>{email}</Td>
                    <Link to={`/edit/`+_id}>
                      <Button>Edit</Button>
                    </Link>
                    <Button onClick={()=>deleteUser(items._id)}>Delete</Button>
                  </Tr>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </>
  );
};

export default GetUser;
