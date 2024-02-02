exports.default = async (req, res) => {
  try {
    res.render('index', { title: 'Express' });
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};

exports.home = async (req, res) => {
  try {
    res.send('<h1>home</h1>');
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
};