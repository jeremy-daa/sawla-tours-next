import EthiopiaTours from "@/components/EthiopiaTours";
import React from "react";
type Params = {
  params: {
    id: string;
  };
};
const page = ({ params: { id } }: Params) => {
  return (
    <main>
      <EthiopiaTours id={id} />
    </main>
  );
};

export default page;
