import Header from "./Components/Header";
import "./App.css";
import { Space } from "antd";
import Sidemenu from "./Components/Sidemenu";
import PageContent from "./Components/pageContent";

function App() {
  return (
    <div className="App">
      <Header />
      <Space className="SideMenuAndPageContent">
        <Sidemenu></Sidemenu>
        <PageContent></PageContent>
      </Space>
    </div>
  );
}

export default App;
