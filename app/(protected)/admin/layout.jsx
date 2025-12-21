
import ClientWrapper2 from "@/components/ClientWrapper2";
export const metadata = {
  title: "Admin",
};
const  layout = ({children}) => {
  return (
    <ClientWrapper2>
        {children}
    </ClientWrapper2>
  );
};

export default  layout;