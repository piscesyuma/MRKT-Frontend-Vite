import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SeiWalletProvider } from "@sei-js/react";

import Layout from "./layouts/MainLayout"
// pages 
import Home from "./pages/Home";
import Collection from "./pages/Collection";

import NoPage from "./pages/NoPage"

function App() {
  return (
    <SeiWalletProvider
      chainConfiguration={{
        chainId: "pacific-1",
        restUrl: "https://sei-api.polkachu.com/",
        rpcUrl: "https://sei-rpc.polkachu.com/",
      }}
      wallets={["compass", "keplr"]}
    >
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/collection/:address" element={<Collection />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
    </SeiWalletProvider>
  );
}

export default App;
