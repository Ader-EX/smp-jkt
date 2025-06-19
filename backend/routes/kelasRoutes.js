// routes/kelasRoutes.js
const express = require("express");
const router = express.Router();
const kelasController = require("../controllers/kelasController");

/**
 * @swagger
 * tags:
 *   name: Kelas
 *   description: Kelas management
 */

/**
 * @swagger
 * /kelas:
 *   get:
 *     summary: Get list of all kelas
 *     tags: [Kelas]
 *     responses:
 *       200:
 *         description: Array of kelas objects
 */
router.get("/", kelasController.getAll);

/**
 * @swagger
 * /names:
 *   get:
 *     summary: Get list of all kelas names
 *     tags: [Kelas]
 *     responses:
 *       200:
 *         description: Array of kelas objects
 */
router.get("/names", kelasController.getNames);

/**
 * @swagger
 * /kelas:
 *   post:
 *     summary: Create a new kelas
 *     tags: [Kelas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Kelas'
 *     responses:
 *       201:
 *         description: Kelas created successfully
 */
router.post("/", kelasController.create);

/**
 * @swagger
 * /kelas/{id}:
 *   get:
 *     summary: Get a kelas by ID
 *     tags: [Kelas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kelas ID
 *     responses:
 *       200:
 *         description: Kelas object
 *       404:
 *         description: Kelas not found
 */
router.get("/:id", kelasController.getById);

/**
 * @swagger
 * /kelas/{id}:
 *   put:
 *     summary: Update a kelas by ID
 *     tags: [Kelas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kelas ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Kelas'
 *     responses:
 *       200:
 *         description: Kelas updated successfully
 *       404:
 *         description: Kelas not found
 */
router.put("/:id", kelasController.update);

/**
 * @swagger
 * /kelas/{id}:
 *   delete:
 *     summary: Delete a kelas by ID
 *     tags: [Kelas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Kelas ID
 *     responses:
 *       204:
 *         description: Kelas deleted successfully
 *       404:
 *         description: Kelas not found
 */
router.delete("/:id", kelasController.delete);

module.exports = router;
