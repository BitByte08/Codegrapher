'use client'
import {useParams} from "next/navigation";
import MainContainer from "@/components/containers/MainContainer";

const Page = () => {
  const params = useParams();
  const id = params.id as string;
  return (
    <MainContainer>
      {id}
    </MainContainer>
  )
}
export default Page;