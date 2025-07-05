import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import SidebarNews from "@/components/SidebarNews";
import axios from "axios";

const Berita = () => {
  const [mainActivities, setMainActivities] = useState([]);
  const [sidebarActivities, setSidebarActivities] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMainActivities = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3000/berita?limit=6&page=${page}`
      );
      setMainActivities(res.data.data);
      setTotalPages(res.data.totalPages);
    } catch (err) {
      console.error("Error fetching main activities:", err);
    }
  };

  const fetchSidebarActivities = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3000/berita/newest?limit=4"
      );
      setSidebarActivities(
        res.data.map((item) => ({
          id: item.id,
          title: item.nama,
          date: new Date(item.createdAt).toLocaleDateString("id-ID"),
          image:
            (item.photo && `http://localhost:3000/uploads/${item.photo}`) ||
            "https://via.placeholder.com/150",
        }))
      );
    } catch (err) {
      console.error("Error fetching sidebar activities:", err);
    }
  };

  useEffect(() => {
    fetchMainActivities();
  }, [page]);

  useEffect(() => {
    fetchSidebarActivities();
  }, []);

  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16">
      <PageHeader
        title="Berita "
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Kegiatan", href: "/berita" },
          { label: "Berita" },
        ]}
      />
      <div className="mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {mainActivities.map((activity) => (
              <Card
                key={activity.id}
                className="overflow-hidden shadow-md rounded-lg"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                      <img
                        src={
                          activity.photo
                            ? `http://localhost:3000/uploads/${activity.photo}`
                            : "https://via.placeholder.com/150"
                        }
                        alt={activity.nama}
                        className="w-full h-48 object-cover"
                      />
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-4  justify-center">
                      <p className="text-xs text-primary-bgText mb-1">
                        {new Date(activity.createdAt).toLocaleDateString(
                          "id-ID"
                        )}
                      </p>
                      <h2 className="text-lg font-semibold text-primary-base mb-2">
                        {activity.nama}
                      </h2>
                      <p className="text-sm text-primary-bgText leading-snug mb-3 line-clamp-3">
                        {activity.description}
                      </p>
                      <a
                        href={`/berita/${activity.id}`}
                        className="inline-block"
                      >
                        <Button>Baca Selengkapnya</Button>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Pagination */}
            <div className="flex justify-center items-center space-x-2 mt-8">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setPage((prev) => Math.max(1, prev - 1))}
                disabled={page === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              {Array.from({ length: totalPages }, (_, i) => (
                <Button
                  key={i + 1}
                  variant={page === i + 1 ? "default" : "ghost"}
                  size="sm"
                  className={
                    page === i + 1
                      ? "bg-primary-base hover:bg-primary-base"
                      : ""
                  }
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button
                variant="ghost"
                size="sm"
                onClick={() =>
                  setPage((prev) => Math.min(totalPages, prev + 1))
                }
                disabled={page === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <SidebarNews sidebarActivities={sidebarActivities} tag="berita" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Berita;
