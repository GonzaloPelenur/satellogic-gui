let {PythonShell} = require('python-shell')
var path = require("path")

function call_python() {
  console.log('Call Python')
  document.getElementById('console').innerHTML = '...............'
  var imPath = document.getElementById("imPath").value
  document.getElementById('inputImage').src=imPath
  console.log(imPath)
  let options = {
    mode: 'text',
    //pythonPath: 'C:/Users/gonpe/AppData/Local/Programs/Python/Python37',
    pythonOptions: ['-u'], // get print results in real-time
    scriptPath: path.join(__dirname, '/../engine/'),
    args: [imPath]
  };
  PythonShell.run('main.py', options, function (err, results) {
    if (err) throw err;
    console.log('results: %j', results);
    document.getElementById('console').innerHTML = results
  });
  

}