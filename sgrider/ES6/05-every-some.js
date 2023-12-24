var users = [
    { id: 21, hasSubmitted: true },
    { id: 62, hasSubmitted: false },
    { id: 4, hasSubmitted: true },
  ];
  
  var hasEverySubmitted = users.every(function (user) {
    return user.hasSubmitted;
  });
  
  var hasSomeSubmitted = users.some(function (user) {
    return user.hasSubmitted;
  });

  console.log(hasEverySubmitted)
  console.log(hasSomeSubmitted)