const productQuery = (q, data, param) => {
  console.log("calling query");

  switch (q) {
    case "GetProducts":
      return [
        {
          $addFields: { idString: { $toString: "$_id" } }, // Cast _id to string
        },
        {
          $lookup: {
            from: "productlikes",
            localField: "idString",
            foreignField: "productId",
            as: "likesAndDislikes",
          },
        },
      ];
      break;
    case "UpdateProduct":
      return (
        { _id: param },
        {
          $set: data,
          $currentDate: { lastUpdated: true },
        }
      );
      break;
    case "GetProductLikesAndDislikesOfProduct":
      return [
        {
          $match: { isDeleted: false, productId: param }, // Exclude deleted records
        },
        {
          $facet: {
            counts: [
              {
                $group: {
                  _id: null,
                  liked: { $sum: "$liked" },
                  disliked: { $sum: "$disliked" },
                },
              },
              {
                $project: {
                  _id: 0, // Exclude the _id field from the result
                  liked: 1,
                  disliked: 1,
                },
              },
            ],
            records: [
              {
                $project: {
                  _id: 1, // Include _id field for related records
                  liked: 1,
                  disliked: 1,
                  userId: 1,
                  productId: 1,
                  // Include any other fields you want to retrieve
                },
              },
            ],
          },
        },
        {
          $unwind: "$counts", // Unwind the counts array to get the final result as a single document
        },
      ];
      break;
    default:
      return null;
  }
};

module.exports = productQuery;
