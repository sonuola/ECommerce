import React from "react";
import Layout from "../components/Layout";
import toast, { Toaster } from "react-hot-toast";

const HomePage = () => {
  return (
    <Layout>
      <h1>HomePage</h1>
      <Toaster />
    </Layout>
  );
};

export default HomePage;
