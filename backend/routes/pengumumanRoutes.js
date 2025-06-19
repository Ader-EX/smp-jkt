// routes/pengumumanRoutes.js
const express = require("express");
const router = express.Router();
const pengumumanController = require("../controllers/pengumumanController");

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
 *   name: Pengumuman
 *   description: Pengumuman management
 */

/**
 * @swagger
 * /pengumuman:
 *   get:
 *     summary: Get list of all pengumuman
 *     tags: [Pengumuman]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Items per page
 *     responses:
 *       200:
 *         description: Array of pengumuman objects
 */
router.get("/", pengumumanController.getAll);

/**
 * @swagger
 * /pengumuman/newest:
 *   get:
 *     summary: Get newest pengumuman entries
 *     tags: [Pengumuman]
 *     parameters:
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         description: Max number of items
 *     responses:
 *       200:
 *         description: List of pengumuman
 */
router.get("/newest", pengumumanController.getNewestPengumuman);

/**
 * @swagger
 * /pengumuman:
 *   post:
 *     summary: Create a new pengumuman member (with photo upload)
 *     tags: [Pengumuman]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Pengumuman'
 
 */
router.post("/", upload.single("photo"), pengumumanController.create);

/**
 * @swagger
 * /pengumuman/{id}:
 *   get:
 *     summary: Get a pengumuman by ID
 *     tags: [Pengumuman]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pengumuman ID
 */
router.get("/:id", pengumumanController.getById);

/**
 * @swagger
 * /pengumuman/{id}:
 *   put:
 *     summary: Update a pengumuman by ID
 *     tags: [Pengumuman]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pengumuman ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Pengumuman'
 *     responses:
 *       200:
 *         description: Pengumuman updated successfully
 *       404:
 *         description: Pengumuman not found
 */
router.put(":id", pengumumanController.update);

/**
 * @swagger
 * /pengumuman/{id}:
 *   delete:
 *     summary: Delete a pengumuman by ID
 *     tags: [Pengumuman]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Pengumuman ID
 */
router.delete(":id", pengumumanController.delete);

module.exports = router;
