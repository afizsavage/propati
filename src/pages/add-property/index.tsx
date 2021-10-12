import React from "react";

import Layout from "../../components/layout";
import {
  AddPropertyform,
  Header,
  ColumnContainer,
  RentColumn,
} from "../../components/add-property";

const Property = () => {
  return (
    <Layout pageInfo={{ pageName: "add-property" }}>
      <div className="flex flex-col h-full overflow-y-hidden flex-grow w-full font-Lato">
        <Header />
        <AddPropertyform loading={false} onSubmit={() => console.log("hi")} />
        <ColumnContainer>
          <RentColumn
            header="Lorem ipsum dolor"
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."
            }
          />
          <RentColumn
            header="Lorem ipsum dolor"
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."
            }
          />
          <RentColumn
            header="Lorem ipsum dolor"
            paragraph={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, exercitation ullamco laboris nisi ut aliquip commo."
            }
          />
        </ColumnContainer>
      </div>
    </Layout>
  );
};

export default Property;
