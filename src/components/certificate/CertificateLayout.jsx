import Job from "../share/Job";
import Topic from "../share/Topic";
import Certificate from "./Certificate";

const certificates = [
  {
    name: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    src: "/react-cert.png",
    detail:
      "React & Next.js course (80+ hours) from Udemy that teach from fundamental to Advance lecture gurantees quality by 100,000+ students",
    button: [
      {
        name: "udemy",
        url: "https://www.udemy.com/certificate/UC-563c006a-8b19-455e-9a28-9951ee0023a9/",
      },
    ],
  },
  {
    name: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain",
    src: "/docker-cert.png",
    detail:
      "Docker course (20+ hours) from Udemy that teach by Docker Captain prepare lecture about fundamental of docker and compose with automate CI/CD pipeline guidance",
    button: [
      {
        name: "udemy",
        url: "https://www.udemy.com/certificate/UC-352afaf7-1d2c-48d1-a3af-cd3df92ba1c5/",
      },
    ],
  },
  {
    name: "Learning How to Learn: Powerful mental tools to help you master tough subjects",
    src: "/how-to-learn.png",
    detail:
      " We’ll learn about how the brain uses two very different learning modes and how it encapsulates (“chunks”) information.",
    button: [
      {
        name: "coursera",
        url: "https://drive.google.com/file/d/1ognDSfuaguVuqmsSJ8bVOI2ccDSqDsrF/view",
      },
    ],
  },
];

export default function CertificateLayout() {
  return (
    <>
      <Topic topic="My Certificates" />
      <Job>
        {certificates.map((cert, index) => (
          <Certificate cert={cert} index={index} />
        ))}
      </Job>
    </>
  );
}
