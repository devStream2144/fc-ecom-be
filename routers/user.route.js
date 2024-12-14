const createRouter = require("../routers/routerFactory.js");
const Controller = require("../controllers/user.controller.js");

const UserPaths = [
  {
    controller: "AddUser",
    service: "addUser",
    method: "post",
    path: "/",
    auth: true,
    valid: true,

    /**
     * @swagger
     * /user:
     *   post:
     *     summary: Add a new user
     *     tags: [Users]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       201:
     *         description: User created successfully
     *       400:
     *         description: Invalid input
     */
  },
  {
    controller: "GetUsers",
    service: "getUsers",
    method: "get",
    path: "/",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /user:
     *   get:
     *     summary: Retrieve all users
     *     tags: [Users]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     responses:
     *       200:
     *         description: List of users
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/User'
     *       401:
     *         description: Unauthorized
     */
  },
  {
    controller: "UserLogin",
    service: "userLogin",
    method: "post",
    path: "/login",
    auth: false,
    valid: false,
    /**
     * @swagger
     * /user/login:
     *   post:
     *     summary: User login
     *     tags: [Users]
     *     description: Log in a user
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               username:
     *                 type: string
     *                 description: The user's username
     *                 example: "user123"
     *               password:
     *                 type: string
     *                 description: The user's password
     *                 example: "password123"
     *     responses:
     *       200:
     *         description: Login successful
     *       400:
     *         description: Invalid credentials
     */
  },
  {
    controller: "GetUserById",
    service: "getUserById",
    method: "get",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /user/{id}:
     *   get:
     *     summary: Get user by ID
     *     tags: [Users]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user
     *     responses:
     *       200:
     *         description: User data retrieved
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/User'
     *       404:
     *         description: User not found
     */
  },
  {
    controller: "UpdateUser",
    service: "updateUser",
    method: "patch",
    path: "/:id",
    auth: true,
    valid: true,
    /**
     * @swagger
     * /user/{id}:
     *   patch:
     *     summary: Update user by ID
     *     tags: [Users]
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
     *             $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: User updated successfully
     *       400:
     *         description: Invalid input
     *       404:
     *         description: User not found
     */
  },
  {
    controller: "DeletedUser",
    service: "deletedUser",
    method: "delete",
    path: "/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /user/{id}:
     *   delete:
     *     summary: Delete user by ID
     *     tags: [Users]
     *     security:
     *       - ApiKeyAuth: []  # Requires token authentication
     *     parameters:
     *       - in: path
     *         name: id
     *         schema:
     *           type: string
     *         required: true
     *         description: The ID of the user
     *     responses:
     *       200:
     *         description: User deleted successfully
     *       404:
     *         description: User not found
     */
  },
  {
    controller: "AddNewRoles",
    service: "addNewRoles",
    method: "post",
    path: "/roles/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /user/roles/{id}:
     *   post:
     *     summary: Add new roles to user
     *     tags: [Roles]
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
     *             type: object
     *             properties:
     *               roles:
     *                 type: array
     *                 items:
     *                   type: string
     *                 description: List of roles to assign
     *             example:
     *               roles: ["admin", "editor"]
     *     responses:
     *       200:
     *         description: Roles added successfully
     *       404:
     *         description: User not found
     */
  },
  {
    controller: "DeleteRoles",
    service: "deleteRoles",
    method: "delete",
    path: "/roles/:id",
    auth: true,
    valid: false,
    /**
     * @swagger
     * /user/roles/{id}:
     *   delete:
     *     summary: Delete roles from user
     *     tags: [Roles]
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
     *             type: object
     *             properties:
     *               roles:
     *                 type: array
     *                 items:
     *                   type: string
     *                 description: List of roles to delete
     *             example:
     *               roles: ["viewer"]
     *     responses:
     *       200:
     *         description: Roles deleted successfully
     *       404:
     *         description: User not found
     */
  },
];

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: The unique ID of the user
 *         fullname:
 *           type: string
 *           description: Full name of the user
 *         username:
 *           type: string
 *           description: Username of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *           description: List of roles assigned to the user
 *       required:
 *         - username
 *         - password
 */

const controller = Controller(UserPaths);

const route = createRouter(UserPaths, controller);

module.exports = route;
