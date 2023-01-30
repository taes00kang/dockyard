import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
  children: React.ReactNode;
}

// eslint-disable-next-line import/prefer-default-export, react/prop-types
export const ReduxProvider: React.FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
