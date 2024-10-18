// controllers/locations.js

module.exports.homelist = function(req, res) {
  res.render('locations-list', {
      title: 'FITZEE',
      pageHeader: {
          title: 'DASHBOARD',
      },
      bmi: null,        // Initialize BMI value
      dietPlan: null,   // Initialize diet plan
  });
};

module.exports.calculateBMI = function(req, res) {
  const { weight, height } = req.body;

  // Check if weight and height are provided and valid
  if (!weight || !height || weight <= 0 || height <= 0) {
    return res.render('locations-list', {
      title: 'FITZEE',
      pageHeader: {
          title: 'DASHBOARD',
      },
      bmi: null,
      dietPlan: "Please enter valid weight and height values.", // Error message for invalid inputs
    });
  }

  const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2); // Calculate BMI
  const dietPlan = getDietPlan(bmiValue); // Function to get diet plan based on BMI

  res.render('locations-list', {
      title: 'FITZEE',
      pageHeader: {
          title: 'DASHBOARD',
      },
      bmi: bmiValue,
      dietPlan: dietPlan,
  });
};

function getDietPlan(bmi) {
  if (bmi < 18.5) {
      return "High-protein foods, increase calorie intake.";
  } else if (bmi < 24.9) {
      return "Balanced diet with a variety of foods.";
  } else if (bmi < 29.9) {
      return "Portion control, nutritious foods.";
  } else {
      return "Structured diet plan with reduced caloric intake.";
  }
}

module.exports.locationInfo = function(req, res) {
  res.render('locations-info1', { title: 'LocationInfo' });
};

module.exports.locationInfo1 = function(req, res) {
  res.render('locations-info2', { title: 'LocationInfo1' });
};

module.exports.addReview = function(req, res) {
  res.render('location-review', { title: 'ADD REVIEW' });
};
