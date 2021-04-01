const getFormattedError = (error) => {
  return {
    errors: {
      body: error,
    },
  };
};

module.exports = {
  getFormattedError,
};
