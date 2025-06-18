// routes/guruRoutes.js
const express = require("express");
const router = express.Router();
const guruController = require("../controllers/guruController");

/**
 * @swagger
 * tags:
 *   name: Guru
 *   description: Guru management
 */

/**
 * @swagger
 * /guru:
 *   get:
 *     summary: Get list of all guru
 *     tags: [Guru]
 *     responses:
 *       200:
 *         description: Array of guru objects
 */
router.get("/", guruController.getAll);

/**
 * @swagger
 * /guru:
 *   post:
 *     summary: Create a new guru
 *     tags: [Guru]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Guru'
 *     responses:
 *       201:
 *         description: Guru created successfully
 */
router.post("/", guruController.create);

/**
 * @swagger
 * /guru/{id}:
 *   get:
 *     summary: Get a guru by ID
 *     tags: [Guru]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Guru ID
 *     responses:
 *       200:
 *         description: Guru object
 *       404:
 *         description: Guru not found
 */
router.get("/:id", guruController.getById);

/**
 * @swagger
 * /guru/{id}:
 *   put:
 *     summary: Update a guru by ID
 *     tags: [Guru]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Guru ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Guru'
 *     responses:
 *       200:
 *         description: Guru updated successfully
 *       404:
 *         description: Guru not found
 */
router.put("/:id", guruController.update);

/**
 * @swagger
 * /guru/{id}:
 *   delete:
 *     summary: Delete a guru by ID
 *     tags: [Guru]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Guru ID
 *     responses:
 *       204:
 *         description: Guru deleted successfully
 *       404:
 *         description: Guru not found
 */
router.delete("/:id", guruController.delete);

module.exports = router;
