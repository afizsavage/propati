import React from "react";

import Layout from "../../components/layout";

const Header = (params) => {
  return( <div className="py-6 text-gray-700 text-center">
    <h1 className="w-full block text-lg font-bold" >Add Your Property</h1>
  </div> )
}

const Property = () => {
  return (
    // <div className="w-screen ">
    //   <AddPropertyForm />
    // </div>
    <Layout pageInfo={{ pageName: "add-property" }} >
      <div className="flex flex-col h-full overflow-y-hidden flex-grow w-full font-Lato">
        <Header />
      </div>
    </Layout>

  );
};

export default Property;