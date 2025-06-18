// routes/kurikulumRoutes.js
const express = require("express");
const router = express.Router();
const kurikulumController = require("../controllers/kurikulumController");

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
 *     summary: Create a new kurikulum
 *     tags: [Kurikulum]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Kurikulum'
 *     responses:
 *       201:
 *         description: Kurikulum created successfully
 */
router.post("/", kurikulumController.create);

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
