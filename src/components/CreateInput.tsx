import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";

interface PropsCreateInput {
  children: string;
  value: string;
  type: "email" | "text" | "number";
  handleChange: (e: string) => void;
}

const CreateInput: React.FC<PropsCreateInput> = ({
  children,
  value,
  type,
  handleChange,
}) => {
  const isError = value === "";

  return (
    <FormControl isInvalid={isError} mt={5}>
      <FormLabel>{children}</FormLabel>
      <Input
        type={type}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
      />
      {isError && <FormErrorMessage>{children} is required.</FormErrorMessage>}
    </FormControl>
  );
};

export default CreateInput;
