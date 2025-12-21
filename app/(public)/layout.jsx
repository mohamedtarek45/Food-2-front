import ClientWrapper from "@/components/ClientWrapper";

const layout = ({ children }) => {
  return <ClientWrapper isProtected={false}>{children}</ClientWrapper>;
};

export default layout;
