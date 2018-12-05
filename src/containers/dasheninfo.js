/**
 * Created by DeLL on 2018/12/5.
 */
import {connect} from 'react-redux'
import DashenInfo from '../components/dashenInfo'
import {update} from '../redux/actions'
export default connect(
  state =>({user:state.user}),
  {update}
)(DashenInfo)