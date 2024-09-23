const GetService = (Service, serviceName, data, next, cb) => {
  return Service[serviceName](data, next, (err, statusCode, data, message) => {
    cb({ err, statusCode, data, message });
  });
};

const ControllerFactory = (Paths, Service) => {
  return Paths.reduce((controllers, { controller, service }) => {
    controllers[controller] = async (req, res, next) => {
      console.log("req.body : ", req.body);

      GetService(
        Service,
        service,
        {
          body: req.body || {},
          id: req.params.id || "",
          roles: req.roles || [],
        },
        next,
        (response) => {
          res.status(response.statusCode).json({
            err: response.err,
            data: response.data,
            message: response.message,
          });
        }
      );
    };
    return controllers;
  }, {});
};

module.exports = ControllerFactory;
