"use client";

import { LinkButton } from "@/components/Button";
import SmallBanner from "@/components/SmallBanner";
import AP from "./APCourses";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

// const lookup: Record<string, string[]> = {
//   "/services/ap": [
//     "AP Tutoring",
//     "Advanced Placement Courses",
//     "Our comprehensive approach includes detailed instruction, regular assessment, and ample opportunities for hands-on practice and timed exams, ensuring that students are well-prepared to excel in their respective AP exams and gain a deep understanding of the subject matter.",
//   ],
//   "/services/testprep": ["SAT/ACT Prep", "Test Prep Courses"],
//   "/services/competition": ["Competition Prep", "STEM Competition Courses"],
//   "/services/consulting": ["Consulting", "Consulting Services"],
// };

export default function Courses() {
  const query = useSearchParams();
  const router = useRouter();
  useEffect(() => {
    if (query.get("service")) {
      document
        .getElementById(query.get("service")!)
        ?.scrollIntoView({ behavior: "smooth" });
      router.push("/services");
    }
  });
  return (
    <>
      <SmallBanner
        title={"Courses and Services"}
        description="Your education experience starts here"
        sideDescription={
          "We tailor to individual learning styles, providing personalized learning experiences to optimize comprehension and retention."
        }
      >
        <LinkButton
          className="bg-navy text-white px-5 py-1 text-lg"
          hoverClass="bg-black bg-opacity-30 text-white"
          href="/register"
        >
          Register Now
        </LinkButton>
      </SmallBanner>
      <AP />
    </>
  );
}
