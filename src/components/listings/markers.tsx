import { MarkerProps } from "../../interfaces";

export const SingleMarker = (Props: MarkerProps) => {
  return (
    <button className="focus:outline-none" onClick={Props.handleClick}>
      {Props.children}
    </button>
  );
};

export const ClusterMarker = (Props: MarkerProps) => {
  return <>{Props.children}</>;
};
