import Job from "../share/Job";
import Topic from "../share/Topic";
import Activity from "./Activity";

const activiites = [
  {
    src: "/Aum-20.jpg",
  },
  {
    src: "/Aum-48.jpg",
  },
  {
    src: "/Aum-101.jpg",
  },
  {
    src: "/Book-17.jpg",
  },
  {
    src: "/Book-80.jpg",
  },
  {
    src: "/Book-097.jpg",
  },
  {
    src: "/Book-20.jpg",
  },
];

export default function ActivityLayout() {
  return (
    <>
      <Topic topic="My Activities" />
      <Job>
        {activiites.map((activity, index) => (
          <Activity activity={activity} key={index} />
        ))}
      </Job>
    </>
  );
}
