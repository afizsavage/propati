import React from "react";

import Layout from "../../components/layout";

const Header = (params) => {
  return( <div className="py-6 text-gray-700 text-center w-2/4 mx-auto">
    <h1 className="w-full block text-lg font-bold" >Add Your Property</h1>
    <h3 className=" text-base text-gray-400 mt-2 font-medium">Rent your property to blah blah blah of the blah</h3>
  </div> )
}

const RentColumn = ({header, paragraph}) => {
  return( <div className="mb-11">
    <h3 className="capitalize w-full block text-lg font-bold mx-auto mb-2">{header}</h3>
    <p>{paragraph}</p>
  </div> )
}

const ColumnContainer = ({children}) => {
  return( <div className="px-5 flex flex-col text-center text-gray-700">{children}</div> )
}         

const Property = () => {
  return (
    // <div className="w-screen ">
    //   <AddPropertyForm />
    // </div>
    <Layout pageInfo={{ pageName: "add-property" }} >
      <div className="flex flex-col h-full overflow-y-hidden flex-grow w-full font-Lato">
        <Header />
      <ColumnContainer >
      <RentColumn header="Lorem ipsum dolor" paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."} />
      <RentColumn header="Lorem ipsum dolor" paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."} />
        <RentColumn header="Lorem ipsum dolor" paragraph={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."} />
      </ColumnContainer>
      </div>
    </Layout>

  );
};

export default Property;