import React, { useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import Typography from '@material-ui/core/Typography'
const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    borderRadius: '8px',
    padding: '50px'
  },
  paper: {
    backgroundColor:'#fff',
    width: '80%',
    height: '90%',
    borderRadius: '8px',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '15px',
    padding: '50px',
    justifyContent: 'space-evenly',
    overflowY: 'scroll',
  },
}));

export default function TransitionsModal({open, handleClose, data}) {
  const classes = useStyles();
 
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        if(data){
            setPhotos(data)
        }
    },[data])

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disablePortal
        disableEnforceFocus
        disableAutoFocus
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
          {photos && photos.map(item => (
              <div key={item.id} style={{textAlign: 'center'}}>
                <img style={{borderRadius: '8px', width:'220px', height: '220px'}} src={item.file} alt={item.file}/>
                <Typography>{item.subtitle.toUpperCase()}</Typography>
              </div>
          ))}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}