/**
 * Created by DeLL on 2018/12/5.
 */
import {connect} from 'react-redux';

import Login from '../components/login/login';
import {login} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {login}
)(Login);