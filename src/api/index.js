
import mock from './mock';
import bookableDates from './bookableDates.json';
import excludeDates from './excludeDates.json';


mock.onAny().passThrough();

mock.onGet('/api/v1/bookableDates').reply(200, bookableDates);
mock.onGet('/api/v1/excludeDates').reply(200, excludeDates);

