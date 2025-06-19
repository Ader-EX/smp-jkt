const express = require("express");
const bodyParser = require("express").json;
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");
const path = require("path");

const errorHandler = require("./middleware/errorHandler");
require("dotenv").config();
const { sequelize } = require("./models");

const app = express();
app.use(bodyParser());
const cors = require("cors");
app.use(cors());
// Swagger route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Mount routes
app.use("/kelas", require("./routes/kelasRoutes"));
app.use("/siswa", require("./routes/siswaRoutes"));
app.use("/berita", require("./routes/beritaRoutes"));
app.use("/pengumuman", require("./routes/pengumumanRoutes"));
app.use("/guru", require("./routes/guruRoutes"));
app.use("/staff", require("./routes/staffRoutes"));
app.use("/kurikulum", require("./routes/kurikulumRoutes"));

app.use(errorHandler);

// Connect to DB and start server
(async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("✅ Database synced successfully");

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("❌ Failed to sync database:", err.message);
    process.exit(1);
  }
})();
