import React, { ReactElement, useCallback, useState } from "react";

type TProps = {
  title: string;
};

type TTProps = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  selectedTab: number;
};

export const TabTitle: React.FC<TTProps> = ({
  title,
  setSelectedTab,
  index,
  selectedTab,
}) => {
  const onClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <span className="w-1/2 text-gray-500 ">
      {" "}
      <button
        onClick={onClick}
        className={
          selectedTab === index
            ? "bg-white text-teal-600 font-semibold shadow-md w-full h-full rounded-full focus:outline-none"
            : "w-full h-full rounded-full font-semibold focus:outline-none"
        }
      >
        {title}
      </button>
    </span>
  );
};

type TsProps = {
  children: ReactElement[];
};

export const Tab: React.FC<TProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const Tabs: React.FC<TsProps> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex justify-center">
        <ul className="lg:w-1/3 w-full  bg-gray-100 px-1 lg:px-2 lg:py-2 py-1 flex inline-flex h-12 lg:h-14 rounded-full">
          {children.map((item, index) => (
            <TabTitle
              selectedTab={selectedTab}
              key={index}
              title={item.props.title}
              index={index}
              setSelectedTab={setSelectedTab}
            />
          ))}
        </ul>
      </div>
      <div>{children[selectedTab]}</div>
    </div>
  );
};

const AppTab = (params) => {
  return (
    <Tabs>
      <Tab title="For Tenants">Tenants</Tab>
      <Tab title="For Landlords ">Landlords</Tab>
    </Tabs>
  );
};

export default AppTab;
