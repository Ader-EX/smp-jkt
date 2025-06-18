const express = require("express");
const router = express.Router();
const siswaController = require("../controllers/siswaController");

/**
 * @swagger
 * tags:
 *   name: Siswa
 *   description: Siswa management
 */

/**
 * @swagger
 * /siswa:
 *   get:
 *     summary: Get list of all siswa
 *     tags: [Siswa]
 *     responses:
 *       200:
 *         description: Array of siswa objects
 */
router.get("/", siswaController.getAll);

/**
 * @swagger
 * /siswa:
 *   post:
 *     summary: Create a new siswa
 *     tags: [Siswa]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Siswa'
 *     responses:
 *       201:
 *         description: Siswa created successfully
 */
router.post("/", siswaController.create);

/**
 * @swagger
 * /siswa/{id}:
 *   get:
 *     summary: Get a siswa by ID
 *     tags: [Siswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Siswa ID
 *     responses:
 *       200:
 *         description: Siswa object
 *       404:
 *         description: Siswa not found
 */
router.get("/:id", siswaController.getById);

/**
 * @swagger
 * /siswa/{id}:
 *   put:
 *     summary: Update a siswa by ID
 *     tags: [Siswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Siswa ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Siswa'
 *     responses:
 *       200:
 *         description: Siswa updated successfully
 *       404:
 *         description: Siswa not found
 */
router.put("/:id", siswaController.update);

/**
 * @swagger
 * /siswa/{id}:
 *   delete:
 *     summary: Delete a siswa by ID
 *     tags: [Siswa]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Siswa ID
 *     responses:
 *       204:
 *         description: Siswa deleted successfully
 *       404:
 *         description: Siswa not found
 */
router.delete("/:id", siswaController.delete);

module.exports = router;
