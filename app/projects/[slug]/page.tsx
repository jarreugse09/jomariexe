import { redirect } from "next/navigation";
import { projects } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: String(project.id),
  }));
}

export default function Page() {
  redirect("/projects");
}
