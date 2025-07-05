import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SidebarNews from "@/components/SidebarNews";
import PageHeader from "@/components/ui/PageHeader";
import NotFound from "../components/NotFound";
import axios from "axios";

const BeritaDetail = () => {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [sidebarActivities, setSidebarActivities] = useState([]);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/berita/${id}`);
        setNews({
          title: res.data.nama,
          date: new Date(res.data.createdAt).toLocaleDateString("id-ID"),
          place: res.data.tempat || "",
          photo: res.data.photo
            ? `http://localhost:3000/uploads/${res.data.photo}`
            : "https://via.placeholder.com/800x400",
          content: res.data.description,
        });
      } catch (err) {
        console.error("Failed to fetch detail:", err);
        setNotFound(true);
      }
    };

    const fetchSidebar = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3000/berita/newest?limit=4"
        );
        setSidebarActivities(
          res.data.map((item) => ({
            id: item.id,
            title: item.nama,
            date: new Date(item.createdAt).toLocaleDateString("id-ID"),
            image: item.photo
              ? `http://localhost:3000/uploads/${item.photo}`
              : "https://via.placeholder.com/150",
          }))
        );
      } catch (err) {
        console.error("Failed to fetch sidebar activities:", err);
      }
    };

    fetchDetail();
    fetchSidebar();
  }, [id]);

  if (notFound) return <NotFound />;
  if (!news) return null; // Optional: Add a loading state

  return (
    <div className="p-6 mx-auto max-w-screen-xl sm:mt-20 mt-10 min-h-screen">
      <PageHeader
        title="Berita "
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Kegiatan", href: "/berita" },
          { label: "Berita" },
        ]}
      />

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-20">
        <div className="sm:col-span-2">
          <h1 className="text-2xl font-bold mb-4 text-primary-base">
            {news.title}
          </h1>
          <div className="flex w-full justify-between">
            <p className="text-sm text-primary-bgText mb-6">{news.date}</p>
            <p className="text-lg text-primary-bgText">{news.place}</p>
          </div>
          <img
            src={news.photo}
            alt={news.title}
            className="w-full object-cover rounded-lg mb-6"
          />

          <p className="text-lg text-primary-bgText text-justify whitespace-pre-line">
            {news.content}
          </p>
        </div>
        <div>
          <SidebarNews sidebarActivities={sidebarActivities} tag="berita" />
        </div>
      </div>
    </div>
  );
};

export default BeritaDetail;
