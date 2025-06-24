const Startup = require("../model/Startup");

exports.registerStartup = async (req, res) => {
  const {
    name,
    tagline,
    description,
    founderName,
    industry,
    location,
    website,
    pitchDeckLink,
  } = req.body;

  try {
    const startupExist = await Startup.findOne({ name });
    if (startupExist)
      return res.status(400).json({ message: "Startup already exists" });

    if (
      !name ||
      !tagline ||
      !description ||
      !founderName ||
      !industry ||
      !location
    ) {
      return res
        .status(400)
        .json({ message: "Please fill all required fields" });
    }

    const startup = new Startup({
      name,
      tagline,
      description,
      founderName,
      industry,
      location,
      website,
      pitchDeckLink,
    });
    await startup.save();
    res.status(201).json({ message: "Startup Registered Successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
};
