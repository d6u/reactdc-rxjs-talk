import { createHashHistory } from 'history';
import { navigate } from './actions';

const history = createHashHistory({
  queryKey: false
});

history.listen(navigate);

export default history;
