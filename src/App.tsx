import { ConfigProvider } from "antd";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { LoaderContextProvider } from "./context/LoaderContext";
import enUS from "antd/es/locale/en_US";
import i18n from "./i18n/i18n";
import LayoutWrapper from "./layouts/LayoutWrapper";
import AxiosInterceptor from "./interceptor/AxiosInterceptor";
import Loading from "./views/loading/Loading";
import Header from "./views/header/Header";
import Footer from "./views/footer/Footer";
import BodyContent from "./views/bodycontent/BodyContent";
import "./styless.css";

const App = () => {
  const [antdLocale, setAntdLocale] = useState(enUS);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setAntdLocale(i18n.language === "en" ? enUS : enUS);
    setTimeout(() => setLoading(false), 3300);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="app">
      <ConfigProvider locale={antdLocale}>
        <LayoutWrapper>
          <LoaderContextProvider>
            <AxiosInterceptor>
              <Header />
              <BodyContent />
              <Footer />
              <Outlet />
            </AxiosInterceptor>
          </LoaderContextProvider>
        </LayoutWrapper>
      </ConfigProvider>
    </div>
  );
};

export default App;
