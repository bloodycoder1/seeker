const TeacherModel = require('../model/teacherSchema');
const asyncHandler = require('../utils/asyncHandler');


exports.createTeacher = 
asyncHandler(async (req, res) => {
  // Schema validation runs automatically here on User.create()
  const teacher = await TeacherModel.create(req.body);

  res.status(201).json({
    success: true,
    data: teacher,
  });
});


exports.getTeachers = asyncHandler(
  async (req, res) => {
    const teachersData = await TeacherModel.find({});
    res.status(200).json({
      success: true,
      data: teachersData,
    });
  }
);
exports.getATeacher = asyncHandler(
    async(req,res)=>{
        const id = req.params.id;
        const teachersData = await TeacherModel.findById(id)
        res.send(teachersData)
    }
)

// Update user controller
exports.updateTeacher = 
asyncHandler(async (req, res) => {
  const teacher= await TeacherModel.
  findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true, // Force validation on update
  });

  if (!teacher) {
    return res.status(404).json({ success: false, message: 'Student not found' });
  }

  res.status(200).json({ success: true, data: teacher });
});


exports.deleteTeacher = asyncHandler(async(req,res)=>{
    let id = req.params.id;
    await TeacherModel.findByIdAndDelete(id);
    res.status(200).send({message:"The user SuccessFully Deleted"})
})