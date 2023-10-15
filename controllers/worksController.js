const WorksModel = require("../models/worksModel");

// Controller for getting all works
const getWorks = async (req, res) => {
  try {
    const works = await WorksModel.find();
    res.json(works);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to retrieve works" });
  }
};

// Controller for creating a new work
const createWork = async (req, res) => {
  const { title, classNote, description, status, email } = req.body;
  const work = new WorksModel({ title, classNote, description, status, email });

  try {
    await work.save();
    res.status(201).json({ message: "Work created successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create work" });
  }
};

// Controller for updating a work by ID
const updateWork = async (req, res) => {
  const { id } = req.params;
  const { title, classNote, description, status, email } = req.body;

  try {
    const updatedWork = await WorksModel.findByIdAndUpdate(id, {
      title,
      classNote,
      description,
      status,
      email,
    });
    res.json(updatedWork);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update work" });
  }
};

// Controller for deleting a work by ID
const deleteWork = async (req, res) => {
  const { id } = req.params;

  try {
    await WorksModel.findByIdAndDelete(id);
    res.json({ message: "Work deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete work" });
  }
};

module.exports = {
  getWorks,
  createWork,
  updateWork,
  deleteWork,
};
