


async function test() {
    // Import packages and ignore any output


    let {PythonInteractive} = require('python-interactive');

    let python = new PythonInteractive();

    await python.start();


    await python.execute('from interface import *');
    let userid = 973241060
    let files = "submission/a01-*.py"
    let type = "python"
    // let output = "submission/report/"
    // Print value of 'pi' and store the output

    // Execute multiline loop command and handle its output via Promise callbacks
    await python.execute(`remote_call(${userid}, "${files}", "${type}")`)
        .then((data) => {
            // If the Python code executed successfully
            console.log(`webpage stored`);
        })
        .catch((err) => {
            // If the Python code executed with an error
            console.log(`Failed to execute due to error:\n ${err}`);
        })
    await python.stop();

};


console.log(test())