let {PythonInteractive} = require('python-interactive');

let python = new PythonInteractive();

python.start();


await (async () => {
    // Import packages and ignore any output
    await python.execute('import mosspy');
    let userid = 973241060
    let files = "submission/a01-*.py"
    let output = "submission/report/"
    // Print value of 'pi' and store the output
    await python.execute(`userid = ${userid}`);

    await python.execute(`m = mosspy.Moss(userid, "python")`)


    await python.execute(`m.addFilesByWildcard(${files})`)

    await python.execute(`url = m.send(lambda file_path, display_name: print('*', end='', flush=True))`)

    await python.execute(`m.saveWebPage(url, "submission/report.html")`)

    await python.execute(`mosspy.download_report(url, ${output}, connections=8, log_level=10, on_read=lambda url: print('*', end='', flush=True))`)

    // Execute multiline loop command and handle its output via Promise callbacks
    await python.execute(`print ("Report URL: " + url)`)
        .then((data) => {
            // If the Python code executed successfully
            console.log(`webpage stored`);
        })
        .catch((err) => {
            // If the Python code executed with an error
            console.log(`Failed to execute due to error:\n ${err}`);
        })
})();

python.stop();