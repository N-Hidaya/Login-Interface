import Register from "./Register";
import {Layout} from "antd";

const {Header, Footer, Content} = Layout;

function App() {
  return (
    <main className="App">
      <Layout>
        <Header></Header>
        <Content style={{padding : '0 50px'}} className="site-layout-content"><Register /></Content>
        <Footer></Footer>
      </Layout>
      
    </main>
  );
}

export default App;
