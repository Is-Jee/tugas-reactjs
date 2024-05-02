import React from "react";
import {
  Editable,
  Tooltip,
  EditablePreview,
  FormLabel,
  EditableTextarea,
} from "@chakra-ui/react";

interface EditInputProps {
  value: string;
  children: React.ReactNode;
  handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const EditInput: React.FC<EditInputProps> = ({
  value,
  children,
  handleChange,
}) => (
  <Editable defaultValue={value} mt={5}>
    <FormLabel>{children}</FormLabel>
    <Tooltip hasArrow openDelay={300} label="Click to edit">
      <EditablePreview px={2} />
    </Tooltip>
    <EditableTextarea px={2} onChange={handleChange} />
  </Editable>
);

export default EditInput;
