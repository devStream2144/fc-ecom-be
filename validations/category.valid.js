// schemas/userSchema.js
const { z } = require("zod");

const schemaValidator = {
  category: z.object({
    category: z.string().min(1, "Category is required"),
    subcategory: z
      .array(
        z.object({
          name: z.string().optional(),
        })
      )
      .min(1, "Add one subcategory atleast")
      .optional(),
  }),

  user: z.object({
    fullname: z.string().min(1, "Fullname is required"),
    username: z.string().min(1, "Username is required"),
    password: z.string().min(1, "Password is required"),
    roles: z
      .array(
        z.object({
          role: z.string().optional(),
          id: z.string().optional(),
        })
      )
      .min(1, "Add one role atleast"),
  }),

  ["user-profile"]: z.object({
    userId: z.string().min(1, "User ID must required!"),
    picture: z.string().min(1, "Profile picture is required!"),
    phone: z.object({
      primary: z.number().min(1, "Primary number is required!"),
      alternate: z.number().optional(),
    }),
    gmail: z.string().min(1, "Gmail is required!"),
    address: z.object({
      line1: z.string().min(1, "Line 1 is required!"),
      line2: z.string().optional(),
      landmark: z.string().optional(),
      city: z.string().min(1, "City is required!"),
      state: z.string().min(1, "State is required!"),
      zip: z.number().min(1, "Zipcode is required!"),
      country: z.string().min(1, "Country is required!"),
    }),
    sizes: z.object({
      foot: z.number().optional(),
      legs: z.number().optional(),
      body: z.number().optional(),
    }),
  }),

  product: z.object({
    name: z.string().min(1, "Product name must required!"),
    description: z.string().optional(),
    price: z.object({
      original: z.number().min(1, "Product price is required!"),
      discount: z.number().optional(),
    }),
    quantity: z.number().min(1, "Gmail is required!"),
    color: z.string().min(1, "Product color is required!"),
    size: z.number().min(1, "Product size is required!"),
    price: z.object({
      liked: z.number().optional(),
      disliked: z.number().optional(),
    }),
    buyed: z.number().optional(),
    category: z.object({
      category: z.string().min(1, "Category is required!"),
      subcategory: z
        .array(
          z.object({
            name: z.string().optional(),
          })
        )
        .optional(),
    }),
  }),

  ["product-likes"]: z.object({
    userId: z.string().min(1, "User ID name must required!"),
    productId: z.string().min(1, "Product ID name must required!"),
    liked: z.number().optional(),
    disliked: z.number().optional(),
    isDeleted: z.boolean().optional(),
  }),

  cart: z.object({
    userId: z.string().min(1, "User ID name must required!"),
    productId: z.string().min(1, "Product ID name must required!"),
    isDeleted: z.boolean().optional(),
  }),
};

module.exports = schemaValidator;
