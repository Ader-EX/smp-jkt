import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import PageHeader from "@/components/ui/PageHeader";

const HubungiKami = () => {
  return (
    <div className="min-h-screen px-6 py-10 md:px-20 md:py-16 ">
      {/* Breadcrumb & Header */}
      <PageHeader
        title="Hubungi Kami"
        breadcrumbs={[
          { label: "Beranda", href: "/" },
          { label: "Hubungi Kami", href: "/hubungi-kami" },
        ]}
      />

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Info */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Info Kontak</h2>
          <div className="flex items-start gap-3">
            <span className="text-xl">📍</span>
            <p>
              Jl. Bakti VI No.28, Cilincing, Kec. Cilincing, Jkt Utara,
              <br />
              Daerah Khusus Ibukota Jakarta 14120
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">✉️</span>
            <a href="mailto:smpnegeri244@gmail.com">smpnegeri244@gmail.com</a>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xl">📞</span>
            <a href="tel:0214400872">(021) 4400872</a>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <Label htmlFor="nama">Nama</Label>
            <Input id="nama" placeholder="Masukan Nama Lengkap" />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Masukan Email" />
          </div>
          <div>
            <Label htmlFor="judul">Judul Pesan</Label>
            <Input id="judul" placeholder="Masukan Judul Pesan" />
          </div>
          <div>
            <Label htmlFor="pesan">Detail Pesan</Label>
            <Textarea id="pesan" placeholder="Masukan Pesan" rows={5} />
          </div>
          <Button type="submit" className="w-full">
            Kirim Pesan
          </Button>
        </form>
      </div>
    </div>
  );
};

export default HubungiKami;
