import SmallBanner from "@/components/SmallBanner";
import { Metadata } from "next";
import F from "./components/Form";

export const metadata: Metadata = {
  title: "EuclidLearn | Register",
  openGraph: {
    type: "website",
    title: "EuclidLearn | Register",
    url: "https://euclidlearn.com/register",
  },
};

export default function Register() {
  return (
    <>
      <SmallBanner
        title="Register for EuclidLearn"
        description="Fill out the below form to register for our programs. We will email you after the form is submitted to handle payment."
      >
        {""}
      </SmallBanner>
      <section className="p-5 mx-5 lg:mx-20">
        <F />
      </section>
    </>
  );
}
