import { createContext } from "react";

const ReadOnlyContext = createContext<{
  isReadOnly: boolean;
  setIsReadOnly: React.Dispatch<React.SetStateAction<boolean>>;
}>({ isReadOnly: false, setIsReadOnly: () => {} });

export default ReadOnlyContext;
