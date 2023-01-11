import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";

interface Props {
  children: React.ReactNode;
}

const client = new QueryClient();

export const QueryProvider: React.FC<Props> = ({ children }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default QueryProvider;
