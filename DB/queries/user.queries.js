const query = (q, data, param) => {
  switch (q) {
    case "GetUsers":
      return [
        {
          $addFields: { idString: { $toString: "$_id" } }, // Cast _id to string
        },
        {
          $lookup: {
            from: "userprofiles",
            localField: "idString",
            foreignField: "userId",
            as: "userProfile",
          },
        },
      ];
      break;
    case "UpdateUser":
      return (
        { _id: param },
        {
          $set: data,
          $currentDate: { lastUpdated: true },
        }
      );
      break;
    default:
      return null;
  }
};

module.exports = query;
