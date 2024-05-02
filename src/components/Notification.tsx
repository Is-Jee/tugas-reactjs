import React from "react";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

interface PropsNotification {
  status: "info" | "success" | "error";
  handleClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const Notification: React.FC<PropsNotification> = ({ status, handleClick }) => {
  return (
    <div
      onClick={handleClick}
      className="bg-[#2c402f66] absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center"
    >
      <Alert
        status={status}
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        height="200px"
        width="550px"
        mx={5}
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg" textColor="#000">
          Application submitted!
        </AlertTitle>
        <AlertDescription maxWidth="sm" textColor="#000">
          Thanks for submitting your application. Our team will get back to you
          soon.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default Notification;
