import Job from "../share/Job";
import Topic from "../share/Topic";
import Certificate from "./Certificate";

const certificates = [
  {
    name: "The Ultimate React Course 2024: React, Next.js, Redux & More",
    src: "/react-cert.png",
    url: "https://www.udemy.com/certificate/UC-563c006a-8b19-455e-9a28-9951ee0023a9/",
    detail: "asdasd",
  },
  {
    name: "Docker Mastery: with Kubernetes +Swarm from a Docker Captain",
    src: "/docker-cert.png",
    url: "https://www.udemy.com/certificate/UC-352afaf7-1d2c-48d1-a3af-cd3df92ba1c5/",
    detail: "docker",
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
