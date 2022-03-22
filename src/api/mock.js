import MockAdapter from 'axios-mock-adapter';
import { dataAPI } from './dataApi';

const mock = new MockAdapter(dataAPI, { onNoMatch: "throwException" });
export default mock;

