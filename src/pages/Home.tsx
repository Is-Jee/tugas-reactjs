import React from "react";
import { Layout } from "../components";
import { Link } from "react-router-dom";
import { useGetApiQuery, useDeleteDataApiMutation } from "../slices/slicesApi";
import { Skeleton, Tooltip } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";

const Home: React.FC = () => {
  const { data, isLoading } = useGetApiQuery("");
  const [deleteData] = useDeleteDataApiMutation();

  const handleDelete = (id: number) => {
    try {
      swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: ["Cancel", "Delete"],
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          await deleteData(id);
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const skeletons = Array(5)
    .fill(null)
    .map((_, i) => (
      <Skeleton
        key={i}
        startColor="#2c402f66"
        endColor="#73907266"
        height="5rem"
        rounded="lg"
        marginY="10px"
      />
    ));

  return (
    <Layout>
      {isLoading ? (
        skeletons
      ) : (
        <div className="py-3 flex flex-col gap-5">
          {data?.map((item) => (
            <div className="relative min-h-20 odd:bg-DarkBlur even:bg-LightBlur odd:hover:bg-LightBlur even:hover:bg-DarkBlur rounded-lg p-3">
              <Link to={`/${item.id}`} key={item.id} className="leading-5">
                <div className="flex text-xs justify-between italic">
                  <p>User Id {item.userId}</p>
                  <p>Post {item.id}</p>
                </div>
                <p>"{item.title}"</p>
              </Link>
              <Tooltip
                hasArrow
                label="Delete"
                bg="gray.700"
                openDelay={300}
                placement="top"
              >
                <span
                  onClick={() => handleDelete(item.id)}
                  className="cursor-pointer absolute right-5 bottom-2 hover:text-black"
                >
                  <FaTrashAlt />
                </span>
              </Tooltip>
            </div>
          ))}
        </div>
      )}
    </Layout>
  );
};

export default Home;
