
import yaml = require('js-yaml');
import fs = require('fs');

export class InstanceWriter {

    writeInstance(): any {

        fs.writeFile('file.txt', 'I am cool!',  (err : any) => {
            if (err) {
                return console.error(err);
            }
            console.log("File created!");
        });
    }
}




