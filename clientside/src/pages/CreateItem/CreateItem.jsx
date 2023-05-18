import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

const CreateItem = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  return (
    <div>
      <Navbar />
      <h1>createItem page</h1>
    </div>
  );
};

export default CreateItem;
