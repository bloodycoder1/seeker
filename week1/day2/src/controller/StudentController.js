const StudentModel = require('../model/studentSchema');
const asyncHandler = require('../utils/asyncHandler');


exports.createStudent = 
asyncHandler(async (req, res) => {
  // Schema validation runs automatically here on User.create()
  const user = await StudentModel.create(req.body);

  res.status(201).json({
    success: true,
    data: user,
  });
});

// Update user controller
exports.updateUser = 
asyncHandler(async (req, res) => {
  const user = await StudentModel.
  findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true, // Force validation on update
  });

  if (!user) {
    return res.status(404).json({ success: false, message: 'Student not found' });
  }

  res.status(200).json({ success: true, data: user });
});

exports.getStudents = asyncHandler(async(req,res)=>{
    let data = await StudentModel.find({})
    res.send(data)
})
exports.getAStudent=asyncHandler(
    async(req,res)=>{
        let id = req.params.id
        let data = await StudentModel.findById(id)
        res.status(200).send(data)
    }
)
exports.deleteStudent = asyncHandler(
async(req,res)=>{
    let id = req.params.id;
    await StudentModel.findByIdAndDelete(id)
    res.status(200).send({message:"The Student Deleted SuccessFully"})
}
)