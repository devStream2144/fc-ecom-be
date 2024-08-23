const query = (q, data, param) => {
  switch (q) {
    case "GetCartItemsByUser":
      return [
        {
          $lookup: {
            from: "product",
            localField: "productId",
            foreignField: "_id",
            as: "productDetails",
          },
        },
        {
          $unwind: "$productDetails", // Optional: Unwind to flatten the array
        },
        {
          $project: {
            _id: 1, // Include current collection's _id
            productId: 1, // Include productId if needed
            "productDetails._id": 1, // Include product's _id
            "productDetails.name": 1, // Include other fields from product if necessary
            // Add other fields as needed
          },
        },
      ];
      break;
    default:
      return null;
  }
};

module.exports = query;
