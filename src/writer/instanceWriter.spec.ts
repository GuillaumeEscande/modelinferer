import { InstanceWriter } from './InstanceWriter';

import * as mocha from 'mocha';
import * as chai from 'chai';

const expect = chai.expect;
describe('InstanceWriter TEst', () => {

  it('should be able to add things correctly' , () => {
    let instance: InstanceWriter = new InstanceWriter();
    instance.writeInstance();
  });

});
