import HomeHeader from "@/components/HomeHeader";
import HomeStats from "@/components/HomeStats";
import Layout from "@/components/Layout";
import { useSession } from "next-auth/react";
export default function Home() {
  const {data: session} = useSession();
  
  return ( 
    <Layout>
    <HomeHeader />
    <HomeStats/>
   </Layout>

  );
   
}

  