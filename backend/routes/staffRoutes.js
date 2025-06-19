// routes/staffRoutes.js
const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");
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
 *   name: Staff
 *   description: Staff management
 */

/**
 * @swagger
 * /staff:
 *   get:
 *     summary: Get list of all staff
 *     tags: [Staff]
 *     responses:
 *       200:
 *         description: Array of staff objects
 */
router.get("/", staffController.getAll);
/**
 * @swagger
 * /staff:
 *   post:
 *     summary: Create a new staff member (with photo upload)
 *     tags: [Staff]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 
 */
router.post("/", upload.single("photo"), staffController.create);

/**
 * @swagger
 * /staff/{id}:
 *   get:
 *     summary: Get a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Staff ID
 *     responses:
 *       200:
 *         description: Staff object
 *       404:
 *         description: Staff not found
 */
router.get("/:id", staffController.getById);

/**
 * @swagger
 * /staff/{id}:
 *   put:
 *     summary: Update a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Staff ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Staff'
 *     responses:
 *       200:
 *         description: Staff updated successfully
 *       404:
 *         description: Staff not found
 */
router.put("/:id", staffController.update);

/**
 * @swagger
 * /staff/{id}:
 *   delete:
 *     summary: Delete a staff member by ID
 *     tags: [Staff]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Staff ID
 *     responses:
 *       204:
 *         description: Staff deleted successfully
 *       404:
 *         description: Staff not found
 */
router.delete("/:id", staffController.delete);

module.exports = router;
