//src/app/project/details/[id]/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from "../../../../components/Layout/Navbar";
import PageHeader from "../../../../components/Common/PageHeader";
import ProjectDetailsContent from "../../../../components/ProjectDetails/ProjectDetailsContent";
import Footer from "../../../../components/Layout/Footer";

interface Project {
  id: number;
  title: string;
  category: string;
  content: string;
  client: string;
  date_published: string;
  image_cover: string;
  thumbnail_images: string[];
  thumbnail_video: string;
  latitude: number | null;
  longitude: number | null;
}

export default function Page() {
  const params = useParams();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await fetch(`/api/projects/${params.id}`);
        const data = await response.json();
        setProject(data);
      } catch (error) {
        console.error("Error fetching project:", error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchProject();
    }
  }, [params.id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <Navbar />

      <PageHeader
        pageTitle={project.title}
        breadcrumbTextOne="Projects"
        breadcrumbUrl="/project"
        breadcrumbTextTwo="Project Details"
      />

      <ProjectDetailsContent project={project} />

      <Footer />
    </>
  );
}