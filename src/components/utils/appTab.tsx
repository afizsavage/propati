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
        <ul className="lg:w-1/3 w-full  bg-gray-100 px-1 lg:px-2 lg:py-2 py-1  inline-flex h-12 lg:h-14 rounded-full">
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

const TabContent = ({ heading, heading1, descriptionParagraph, order }) => {
  return (
    <div className="w-full flex flex-col lg:flex-row ">
      <div className={"w-full lg:w-1/2 " + order}>
        <div className="w-full -bottom-14 pt-24 lg:pr-28">
          <h2 className="text-teal-700 text-center lg:text-left  text-xl tracking-wider font-semibold mb-2 lg:mb-6">
            {heading}
          </h2>
          <div>
            <h3 className="font-Lato font-black break-words text-center lg:text-left  text-gray-900 leading-tight text-4xl">
              {heading1}
            </h3>
          </div>
          <div className="text-base text-gray-700 mt-2 lg:mt-5 text-center lg:text-left">
            <p>{descriptionParagraph}</p>
          </div>
        </div>
      </div>{" "}
      <div className="w-full lg:w-1/2">2</div>
    </div>
  );
};

const ServiceTab = () => {
  return (
    <Tabs>
      <Tab title="For Tenants">
        <TabContent
          heading="Access"
          heading1="Browse hundreds of properties in your city"
          descriptionParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
          order
        />
        <TabContent
          heading="Ease"
          heading1="Apply and pay for your next home or office online"
          descriptionParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
          order="order-last"
        />
        <TabContent
          heading="Access"
          heading1="Browse hundreds of properties in your city"
          descriptionParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat."
          order
        />
      </Tab>
      <Tab title="For Landlords ">Landlords</Tab>
    </Tabs>
  );
};

export default ServiceTab;
