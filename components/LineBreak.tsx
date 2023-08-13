import { Fragment } from "react";

interface Props {
  str: string;
}
const LineBreak = ({ str }: Props) => {
  return (
    <>
      {
        //return the string with <br> tags in place of \n
        str.split("\n").map((item, index) => {
          return (
            <Fragment key={index}>
              <span>{item}</span>
              <br />
            </Fragment>
          );
        })
      }
    </>
  );
};

export default LineBreak;
