// config/swagger.js
const swaggerJSDoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "School API",
      version: "1.0.0",
      description: "API documentation for SMP Jakarta backend",
    },
    servers: [
      {
        url: "http://localhost:3000",
        // url: "http://43.157.250.132:3000",
      },
    ],
    components: {
      schemas: {
        Kelas: {
          type: "object",
          required: ["namaKelas", "thnPelajaran", "waliKelas"],
          properties: {
            id: { type: "integer", example: 1 },
            namaKelas: { type: "string", example: "7A" },
            thnPelajaran: { type: "string", example: "2024/2025" },
            waliKelas: { type: "string", example: "Budi Santoso" },
          },
        },
        Siswa: {
          type: "object",
          required: ["nama", "nis", "jenisKelamin", "kelasId"],
          properties: {
            nama: { type: "string", example: "Siti Aminah" },
            nis: { type: "string", example: "2024001" },
            jenisKelamin: {
              type: "string",
              enum: ["L", "P"],
              example: "P",
            },
            agama: { type: "string", example: "Islam" },
            kelasId: { type: "integer", example: 1 },
          },
        },
        Berita: {
          type: "object",
          required: ["nama", "description"],
          properties: {
            id: { type: "integer", example: 10 },
            nama: { type: "string", example: "Upacara Kemerdekaan" },
            description: { type: "string", example: "Deskripsi berita..." },
            photo: {
              type: "string",
              format: "binary",
              description: "Upload a PNG or JPG file",
            },
            createdAt: { type: "string", format: "date-time" },
          },
        },
        Pengumuman: {
          type: "object",
          required: ["nama", "description"],
          properties: {
            id: { type: "integer", example: 5 },
            nama: { type: "string", example: "Libur Sekolah" },
            description: { type: "string", example: "Deskripsi pengumuman..." },
            photo: {
              type: "string",
              format: "binary",
              description: "Upload a PNG or JPG file",
            },
            createdAt: { type: "string", format: "date-time" },
          },
        },
        Guru: {
          type: "object",
          required: ["nama", "nip"],
          properties: {
            id: { type: "integer", example: 3 },
            nama: { type: "string", example: "Ahmad Riyadi" },
            nip: { type: "string", example: "1987654321" },
            status: { type: "string", example: "Aktif" },
            mapel: { type: "string", example: "Matematika" },
            tugasTambahan: {
              type: "string",
              example: "Wakil Kepala Sekolah",
            },
            photo: {
              type: "string",
              format: "binary",
              description: "Upload a PNG or JPG file",
            },
          },
        },
        Staff: {
          type: "object",
          required: ["nama", "nip", "status", "jabatan", "photo"],
          properties: {
            id: { type: "integer", example: 2 },
            nama: { type: "string", example: "Dewi Lestari" },
            nip: { type: "string", example: "2012345678" },
            status: { type: "string", example: "Kontrak" },
            jabatan: { type: "string", example: "Bendahara" },
            photo: {
              type: "string",
              format: "binary",
              description: "Upload a PNG or JPG file",
            },
          },
        },
        Kurikulum: {
          type: "object",
          required: ["nama", "file", "createdAt"],
          properties: {
            id: { type: "integer", example: 4 },
            nama: { type: "string", example: "Kurikulum Merdeka" },
            photo: {
              type: "string",
              format: "binary",
              description: "Upload a PNG or JPG file",
            },
            file: {
              type: "string",
              format: "binary",
              description: "Upload a PDF file",
            },
            createdAt: { type: "string", format: "date-time" },
          },
        },
      },
    },
  },
  apis: ["./routes/**/*.js"],
};

module.exports = swaggerJSDoc(options);
