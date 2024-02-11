interface CourseLogisticsProps {
  bestFor: string;
  pricing: string;
  classType: "private" | "group";
  durationWeeks: number;
}

const CourseLogisticsBox = (props: { title: string; content: string }) => {
  return (
    <div className="flex flex-col text-center bg-white w-40 py-3 shadow-sm border-red border border-opacity-30 rounded-lg">
      <p className="font-antic text-lg">{props.title}</p>
      <h1 className="font-dm text-3xl">{props.content}</h1>
    </div>
  );
};

export default function CourseLogistics(props: CourseLogisticsProps) {
  return <></>;
  // return (
  //   <section className="flex gap-5 justify-center">
  //     <CourseLogisticsBox title="Best For" content={props.bestFor} />
  //     <CourseLogisticsBox title="Pricing" content={props.pricing} />
  //     <CourseLogisticsBox
  //       title="Class Type"
  //       content={
  //         props.classType.charAt(0).toUpperCase() + props.classType.slice(1)
  //       }
  //     />
  //     <CourseLogisticsBox
  //       title="Duration"
  //       content={`${props.durationWeeks} weeks`}
  //     />
  //   </section>
  // );
}
