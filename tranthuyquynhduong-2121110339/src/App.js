import { BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutSide from "./layouts/LayoutSide";
import RouterSite from "./router";
import LayoutAdmin from "./layouts/LayoutAdmin";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutSide/>}>
          {RouterSite.RouterPublic.map(function(route,index){
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>} />
          })}
        </Route>
        <Route path="/admin" element={<LayoutAdmin/>}>
          {RouterSite.RouterPrivate.map(function(route,index){
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page/>} />
          })}
        </Route>

      </Routes>
    </BrowserRouter>
    </div>
  );
}


export default App;