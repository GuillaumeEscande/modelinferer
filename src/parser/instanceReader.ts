
import yaml = require('js-yaml');
import fs = require('fs');
import LoadOptions = yaml.LoadOptions;
import SchemaDefinition = yaml.SchemaDefinition;

export class InstanceReader {

    schemaPath: string;
    //loadOption: LoadOptions;

    constructor(schemaPath: string) {
        //let fileContent: string = fs.readFileSync(schemaPath, 'utf8')

        //loadOption = {
        //    filename: str,
        //};

        //this.schema = yaml.safeLoad(fileContent, string);
        this.schemaPath = schemaPath;
    } 

    readInstance(filePath: string): any {
        return yaml.safeLoad(filePath);
    }
}




