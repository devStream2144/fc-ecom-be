const createRouter = require("../routers/routerFactory.js");
const Controller = require("../controllers/product.controller.js");

const UserProfilepath = [
  {
    controller: "AddUserProfile",
    service: "addUserProfile",
    method: "post",
    path: "/",
    auth: false,
    valid: true,
    /**
     * @swagger
     * /user-profile/{id}:
     *   post:
     *     summary: Update user profile by ID
     *     tags: [UserProfile]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UserProfile'
     *     responses:
     *       200:
     *         description: User profile updated successfully!
     *       400:
     *         description: Invalid input!
     *       404:
     *         description: User not found!
     */
  },
  {
    controller: "UpdateUserProfile",
    service: "updateUserProfile",
    method: "patch",
    path: "/:id",
    auth: false,
    valid: true,
    /**
     * @swagger
     * /user-profile/{id}:
     *   patch:
     *     summary: Update user profile by ID
     *     tags: [UserProfile]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/UserProfile'
     *     responses:
     *       200:
     *         description: User profile updated successfully!
     *       400:
     *         description: Invalid input!
     *       404:
     *         description: User not found!
     */
  },
];

const controller = Controller(UserProfilepath);

const route = createRouter(UserProfilepath, controller);

module.exports = route;

/**
 * @swagger
 * components:
 *   schemas:
 *     UserProfile:
 *       type: object
 *       properties:
 *         userProfileId:
 *           type: string
 *           description: Auto-generated ID as string from MongoDB `_id`.
 *           example: "63f5f1a3c19bdb0014d3b56f"
 *
 *         userId:
 *           type: string
 *           description: Unique user identifier.
 *           example: "user123"
 *           required: true
 *
 *         picture:
 *           type: string
 *           description: URL of the user's profile picture.
 *           example: "https://example.com/pic.jpg"
 *           required: true
 *
 *         phone:
 *           type: object
 *           properties:
 *             primary:
 *               type: integer
 *               description: Primary phone number.
 *               example: 1234567890
 *               required: true
 *             alternate:
 *               type: integer
 *               description: Alternate phone number.
 *               example: 9876543210
 *
 *         gmail:
 *           type: string
 *           description: User's Gmail address.
 *           example: "user@gmail.com"
 *           required: true
 *
 *         address:
 *           type: object
 *           properties:
 *             line1:
 *               type: string
 *               description: Address line 1.
 *               example: "123 Main St"
 *               required: true
 *             line2:
 *               type: string
 *               description: Address line 2 (optional).
 *               example: "Apt 4B"
 *             landmark:
 *               type: string
 *               description: Nearby landmark (optional).
 *               example: "Near Central Park"
 *             city:
 *               type: string
 *               description: City of residence.
 *               example: "New York"
 *               required: true
 *             state:
 *               type: string
 *               description: State of residence.
 *               example: "NY"
 *               required: true
 *             zip:
 *               type: integer
 *               description: Zip code.
 *               example: 10001
 *               required: true
 *             country:
 *               type: string
 *               description: Country of residence.
 *               example: "USA"
 *               required: true
 *
 *         sizes:
 *           type: object
 *           properties:
 *             foot:
 *               type: number
 *               description: Foot size in inches (optional).
 *               example: 10.5
 *             legs:
 *               type: number
 *               description: Leg size in inches (optional).
 *               example: 32
 *             body:
 *               type: number
 *               description: Body size in inches (optional).
 *               example: 38
 *
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Date of profile creation.
 *           example: "2023-12-07T12:00:00Z"
 *           default: "current date-time"
 */
