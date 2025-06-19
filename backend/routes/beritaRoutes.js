const express = require("express");
const router = express.Router();
const beritaController = require("../controllers/beritaController");

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, "../uploads")),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});
const upload = multer({ storage });

/**
 * @swagger
 * tags:
 *   name: Berita
 *   description: Berita management
 */

/**
 * @swagger
 * /berita:
 *   get:
 *     summary: Get list of all berita
 *     tags: [Berita]
 *     responses:
 *       200:
 *         description: Array of berita objects
 */
router.get("/", beritaController.getAll);
/**
 * @swagger
 * /berita/newest:
 *   get:
 *     summary: Get newest berita entries
 *     tags: [Berita]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Max number of items
 *     responses:
 *       200:
 *         description: List of berita
 */
router.get("/newest", beritaController.getNewestBerita);

/**
 * @swagger
 * /berita:
 *   post:
 *     summary: Create a new berita (with photo upload)
 *     tags: [Berita]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Berita'
 */
router.post("/", upload.single("photo"), beritaController.create);

/**
 * @swagger
 * /berita/{id}:
 *   get:
 *     summary: Get a berita by ID
 *     tags: [Berita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Berita ID
 *     responses:
 *       200:
 *         description: Berita object
 *       404:
 *         description: Berita not found
 */
router.get("/:id", beritaController.getById);

/**
 * @swagger
 * /berita/{id}:
 *   put:
 *     summary: Update a berita by ID
 *     tags: [Berita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Berita ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Berita'
 *     responses:
 *       200:
 *         description: Berita updated successfully
 *       404:
 *         description: Berita not found
 */
router.put("/:id", beritaController.update);

/**
 * @swagger
 * /berita/{id}:
 *   delete:
 *     summary: Delete a berita by ID
 *     tags: [Berita]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Berita ID
 *     responses:
 *       204:
 *         description: Berita deleted successfully
 *       404:
 *         description: Berita not found
 */
router.delete("/:id", beritaController.delete);

module.exports = router;
