import React, { useEffect, useState } from "react";
import {
  EditInput,
  Layout,
  ButtonInput,
  Notification,
  LoadingCustom,
} from "../components";
import {
  useGetDetailApiQuery,
  useUpdateDataApiMutation,
} from "../slices/slicesApi";
import { useParams } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Edit: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading, isFetching } = useGetDetailApiQuery(id);
  const [progress, setProgress] = useState<number>(0);
  const [userId, setUserId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const [newEdit, { isLoading: isMutationLoading }] =
    useUpdateDataApiMutation();

  const handleProgressUpdate = () => {
    if (isLoading || isFetching) {
      setProgress(50);
    } else if (data) {
      setProgress(100);
    } else {
      setProgress(10);
    }
  };

  useEffect(() => {
    handleProgressUpdate();
  }, [isLoading, isFetching, data]);

  const handleClickEdit = async () => {
    try {
      const newData = new FormData();
      newData.append("userId", String(userId));
      newData.append("title", title);
      newData.append("body", body);

      await newEdit({ id, newData }).unwrap();
      setIsSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      {isLoading ? (
        <LoadingBar color="#FF204E" progress={progress} />
      ) : (
        <>
          <EditInput
            value={data?.userId}
            handleChange={(e) => setUserId(Number(e.target.value))}
          >
            User Id
          </EditInput>
          <EditInput
            value={data?.title}
            handleChange={(e) => setTitle(e.target.value)}
          >
            title
          </EditInput>
          <EditInput
            value={data?.body}
            handleChange={(e) => setBody(e.target.value)}
          >
            body
          </EditInput>
          <ButtonInput handleClick={handleClickEdit}>Edit</ButtonInput>

          {isMutationLoading && <LoadingCustom />}

          {isSuccess && <Notification status="success" handleClick={(isSuccess) => setIsSuccess(!isSuccess)} />}
        </>
      )}
    </Layout>
  );
};

export default Edit;
