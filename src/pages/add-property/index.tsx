import React from "react";
import { BsTypeH1 } from "react-icons/bs";

import Layout from "../../components/layout";
import { AddPropertyForm } from "../../components/property";

const Property = () => {
  return (
    // <div className="w-screen ">
    //   <AddPropertyForm />
    // </div>
    <Layout pageInfo={{ pageName: "add-property" }} >
      <div className="flex flex-col h-full overflow-y-hidden flex-grow w-full">Check</div>
    </Layout>

  );
};

export default Property;