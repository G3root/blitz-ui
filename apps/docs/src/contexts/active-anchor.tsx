import * as React from 'react';

export type ActiveAnchor = Record<
  string,
  {
    isActive?: boolean;
    aboveHalfViewport: boolean;
    index: number;
    insideHalfViewport: boolean;
  }
>;
const ActiveAnchorContext = React.createContext<ActiveAnchor>({});
const ActiveAnchorSetterContext = React.createContext<
  (value: ActiveAnchor | ((prevState: ActiveAnchor) => ActiveAnchor)) => void
>((s) => s);

// Separate the state as 2 contexts here to avoid
// re-renders of the content triggered by the state update.
export const useActiveAnchor = () => React.useContext(ActiveAnchorContext);
export const useActiveAnchorSet = () =>
  React.useContext(ActiveAnchorSetterContext);
export const ActiveAnchor = ({ children }: React.PropsWithChildren<{}>) => {
  const state = React.useState<ActiveAnchor>({});
  return (
    <ActiveAnchorContext.Provider value={state[0]}>
      <ActiveAnchorSetterContext.Provider value={state[1]}>
        {children}
      </ActiveAnchorSetterContext.Provider>
    </ActiveAnchorContext.Provider>
  );
};
