import React, { useState } from "react";
import {
  ButtonInput,
  CreateInput,
  Layout,
  LoadingCustom,
  Notification,
} from "../components";
import { useCreateDataApiMutation } from "../slices/slicesApi";

const Create: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [isSuccess, setisSuccess] = useState<boolean>(false);

  const [createData, { isLoading }] = useCreateDataApiMutation();

  const handleCreate = async () => {
    try {
      const data = new FormData();

      data.append("userId", userId);
      data.append("title", title);
      data.append("body", body);

      await createData(data).unwrap();
      setisSuccess(true)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <CreateInput value={userId} type="number" handleChange={setUserId}>
        User Id
      </CreateInput>
      <CreateInput value={title} type="text" handleChange={setTitle}>
        Title
      </CreateInput>
      <CreateInput value={body} type="text" handleChange={setBody}>
        Body
      </CreateInput>
      <ButtonInput handleClick={handleCreate}>Create</ButtonInput>

      {isLoading && <LoadingCustom />}

      {isSuccess && (
        <Notification
          status="success"
          handleClick={(isSuccess) => setisSuccess(!isSuccess)}
        />
      )}
    </Layout>
  );
};

export default Create;
