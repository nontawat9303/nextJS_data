import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function MeetupItem(props) {
  const router = useRouter();

  function showDetailsHandler() {
    router.push('/' + props.id);
  }

  return (
    <div class="container">
      <div class="col-12 grid-margin stretch-card">
      <li className={classes.item}>
      <div class="col-12 grid-margin stretch-card ">
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
        </div>
        <div className={classes.actions}>
          <button onClick={showDetailsHandler}>Show Details</button>
        </div>
      </Card>
      </div>
      
      </li>
      </div>
    </div>
    
      
  );
}

export default MeetupItem;
