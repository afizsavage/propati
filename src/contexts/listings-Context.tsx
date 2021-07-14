import * as React from "react";

type Action =
  | { type: "increment" }
  | { type: "add"; payload: Array<any> }
  | { type: "minus"; payload: number }
  | { type: "decrement" };

type Dispatch = (action: Action) => void;
type State = { listings: Array<any> };
type listingsProviderProps = { children: React.ReactNode };

const listingsStateContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function listingsReducer(state: State, action: Action) {
  switch (action.type) {
    case "add": {
      return { listings: action.payload };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ListingsProvider({ children }: listingsProviderProps) {
  const [state, dispatch] = React.useReducer(listingsReducer, { listings: [] });
  // NOTE: you *might* need to memoize this value
  // Learn more in http://kcd.im/optimize-context
  const value = { state, dispatch };
  return (
    <listingsStateContext.Provider value={value}>
      {children}
    </listingsStateContext.Provider>
  );
}

function uselistings() {
  const context = React.useContext(listingsStateContext);
  if (context === undefined) {
    throw new Error("uselistings must be used within a ListingsProvider");
  }
  return context;
}

export { ListingsProvider, uselistings };
