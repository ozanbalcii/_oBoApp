import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import * as Yup from "yup";
import { useFormik } from "formik";
import Input from "../../../../../components/common/Input";
import { CodeContext, useCodeContext } from "../../../../../contexts/vsCode/Code";
import { AppOpenCloseContext, useAppOpenCloseContext } from "../../../../../contexts/trashContexts/AppOpenClose";

const OBoAppHighlighter = () => {
  const {command, setCommand} = useCodeContext(CodeContext);
  const {handleButtonPdf, handleButtonLinkedin} =
  useAppOpenCloseContext(AppOpenCloseContext);
  
  const validationSchema = Yup.object({
    // email: Yup.string().string("Invalid email format").required("Required"),
  });


  const codeString = `
  Array.isArray(command) && command.map((value) => value?.code === "/clr" && setCommand([]));
  Array.isArray(command) && command.map((value) => value?.code === "/cv" && handleButtonPdf());
  You are here ---->  ${
    Array.isArray(command) ? command.map((item) => item?.code).join(" ") : ""
  }
  Array.isArray(command) && command.map((value) => value?.code === "/linkedin" && handleButtonLinkedin());
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="pl-[60px] pt-2 pr-5 border-none border">
        <Input
          type={"text"}
          onChange={handleChange}
          value={values.code}
        />
      </div>
      <SyntaxHighlighter
        className="!m-0"
        style={{ ...okaidia }}
      >
        {codeString}
      </SyntaxHighlighter>
    </form>
  );
  `;

  Array.isArray(command) && command.map((value) => value?.code === "/clr" && setCommand([]));
  Array.isArray(command) && command.map((value) => value?.code === "/cv" && handleButtonPdf());
  Array.isArray(command) && command.map((value) => value?.code === "/linkedin" && handleButtonLinkedin());

  const { handleSubmit, handleChange, values } = useFormik({
    validationSchema: validationSchema,
    initialValues: {
      code: "",
    },
    onSubmit: (values, { resetForm }) => {
      setTimeout(() => {
        setCommand((prevState) => [
          ...prevState,
          {
            code: values.code,
          },
        ]);
      });
      resetForm();
    },
  });
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="pl-[60px] pt-2 pr-5 border-none border">
        <Input
          className={
            " text-white border-none w-full h-full pt-1 pb-1 bg-gray-600 rounded-md p-2"
          }
          type={"text"}
          name="code"
          placeholder="Enter code"
          onChange={handleChange}
          value={values.code}
        />
      </div>
      <SyntaxHighlighter
        className="!m-0"
        language="javascript"
        style={{ ...okaidia }}
        showLineNumbers
      >
        {codeString}
      </SyntaxHighlighter>
    </form>
  );
};

export default OBoAppHighlighter;
