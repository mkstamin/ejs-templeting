/*
 * Title:appointment Controller
 * Description:appointment Controller
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// appointment - moudle scaffolding
const appointment = {};

// render appointment page
appointment.appointmentController = (req, res) => {
    res.render('pages/make-appointment', { title: 'Make Appointment' });
};

// export moudle
module.exports = appointment;
