// routes/kurikulumRoutes.js
const express = require("express");
const router = express.Router();
const kurikulumController = require("../controllers/kurikulumController");

const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads")),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});
const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const allowedTypes = ["application/pdf", "image/png", "image/jpeg"];
    if (allowedTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only PDF, PNG, and JPG files are allowed"));
    }
  },
});
/**
 * @swagger
 * tags:
 *   name: Kurikulum
 *   description: Kurikulum management
 */

/**
 * @swaggers
 * /kurikulum:
 *   get:
 *     summary: Get list of all kurikulum
 *     tags: [Kurikulum]
 *     responses:
 *       200:
 *         description: Array of kurikulum objects
 */
router.get("/", kurikulumController.getAll);

/**
 * @swagger
 * /kurikulum:
 *   post:
 *     summary: Create a new kurikulum member (with photo upload)
 *     tags: [Kurikulum]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Kurikulum'
 
 */
router.post(
  "/",
  upload.fields([
    { name: "file", maxCount: 1 },
    { name: "photo", maxCount: 1 },
  ]),
  kurikulumController.create
);

/**
 * @swagger
 * /kurikulum/{id}:
 *   get:
 *     summary: Get a kurikulum by ID
 *     tags: [Kurikulum]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kurikulum ID
 *     responses:
 *       200:
 *         description: Kurikulum object
 *       404:
 *         description: Kurikulum not found
 */
router.get("/:id", kurikulumController.getById);

/**
 * @swagger
 * /kurikulum/{id}:
 *   put:
 *     summary: Update a kurikulum by ID
 *     tags: [Kurikulum]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kurikulum ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Kurikulum'
 *     responses:
 *       200:
 *         description: Kurikulum updated successfully
 *       404:
 *         description: Kurikulum not found
 */
router.put("/:id", kurikulumController.update);

/**
 * @swagger
 * /kurikulum/{id}:
 *   delete:
 *     summary: Delete a kurikulum by ID
 *     tags: [Kurikulum]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kurikulum ID
 *     responses:
 *       204:
 *         description: Kurikulum deleted successfully
 *       404:
 *         description: Kurikulum not found
 */
router.delete("/:id", kurikulumController.delete);

module.exports = router;
