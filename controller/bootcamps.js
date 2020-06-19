
//? @decription      Get all Bootcamps
//! @route           GET /api/v1/bootcamps/:id
//* @access          Public
exports.getBootcamps = (req, res, next) => {
    res.status(200).json({ success: true, msg: `show all bootcamps ${req.params.id}` });
}

//? @decription      Get single Bootcamp
//! @route           GET /api/v1/bootcamps/:id
//* @access          Public
exports.getBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `get specific bootcamp ${req.params.id}` });
}

//? @decription      Create  Bootcamps
//! @route           post /api/v1/bootcamps
//* @access          Private
exports.createBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: 'create bootcamp' });
}

//? @decription      Update Bootcamps
//! @route           PUT /api/v1/bootcamps/:id
//* @access          Private
exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `update bootcamp ${req.params.id}` });
}

//? @decription      Delete Bootcamps
//! @route           DELETE /api/v1/bootcamps/:id
//* @access          Privte
exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({ success: true, msg: `delete bootcamp ${req.params.id}` });
}