import ClientWrapper from "@/components/ClientWrapper";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
const layout = ({ children }) => {
  return (
    <ClientWrapper isProtected={true}>
      <Navigation />
      {children}
      <Footer/>
    </ClientWrapper>
  );
};

export default layout;
