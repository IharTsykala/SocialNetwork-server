const Pet = require("./model-pets")

const getAllPets = async function() {
  try {
    return await Pet.find({})
  } catch (e) {
    console.log(e)
  }
}

const getPetsById = async function(id) {
  try {
    return await Pet.findById(id)
  } catch (e) {
    console.log(e)
  }
}

const addPets = async function(body) {
  console.log(body)
  const pet = new Pet(body)
  try {
    await pet.save()
  } catch (e) {
    console.log(e)
  }
  return { pet }
}

const updatePetsById = async function(id, body) {
  try {
    return await Pet.findByIdAndUpdate(id, body)
  } catch (e) {
    console.log(e)
  }
}

const deletePetsById = async function(id) {
  try {
    return await Pet.deleteOne({ _id: id })
  } catch (e) {
    console.log(e)
  }
}

module.exports = {
  getAllPets,
  getPetsById,
  addPets,
  updatePetsById,
  deletePetsById
}
