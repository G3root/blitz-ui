import {
  useContext,
  createContext,
  PropsWithChildren,
  useState,
  Dispatch,
  SetStateAction
} from 'react';

type MenuContext = boolean;

type MenuSetterContext = () => void;

const MenuContext = createContext<MenuContext>(false);
const MenuSetterContext = createContext<MenuSetterContext>(() => undefined);

export const useMenu = () => useContext(MenuContext);
export const useMenuSet = () => useContext(MenuSetterContext);

export const MenuStateProvider = ({ children }: PropsWithChildren<{}>) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => setMenu((prev) => !prev);
  return (
    <MenuContext.Provider value={menu}>
      <MenuSetterContext.Provider value={handleMenu}>
        {children}
      </MenuSetterContext.Provider>
    </MenuContext.Provider>
  );
};
