import ActivityLayout from "./activitie/ActivityLayout";
import CertificateLayout from "./certificate/CertificateLayout";
import ProjectLayout from "./project/ProjectLayout";

export default function Work() {
  return (
    <div className="flex flex-col gap-y-5">
      <ProjectLayout />
      <ActivityLayout />
      <CertificateLayout />
    </div>
  );
}
