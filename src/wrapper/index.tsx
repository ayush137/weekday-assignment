import { Provider as ReduxProvider } from "react-redux";
import { TReactProps } from "../index.types";
import { store } from "../store";

const IndexProvider: TReactProps = (props) => {
  const { children } = props;
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default IndexProvider;
