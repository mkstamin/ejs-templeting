/*
 * Title:Blog Controller
 * Description:Blog Controller
 * Author:Mks Tamin
 * Date: 14.01.2021
 *
 */

// Blog - moudle scaffolding
const blog = {};

// render Blog page
blog.blogController = (req, res) => {
    res.render('pages/blog/blog', { title: 'Blog' });
};

// export moudle
module.exports = blog;
