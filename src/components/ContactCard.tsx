import React, {useState} from 'react';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ErrorBoundary from 'components/ErrorBoundary';
interface Props {
  name?: {
    title: string;
    first: string;
    last: string;
  };
  picture?: any;
  cell?: any;
  id?: any;
  location?: any;
  gender?: any;
  email?: any;
  dob?: any;
  phone?: string;
  isSuggestion: boolean;
  handleNew?: any;
}

const ContactCard: React.FC<Props> = ({name, phone, picture, cell, location, gender, email, dob, isSuggestion, handleNew}) => {
  const userFullname = `${name?.title} ${name?.first} ${name?.last}`;
  const [modalState, setmodalState] = useState({open: false});
  const handleAddContact = () => {
    handleNew({name, picture, phone});
  };

  const handleOpen = () => {
    setmodalState({open: !modalState.open});
  };

  const handleClose = () => {
    setmodalState({open: !modalState.open});
  };

  return (
    <>
      {modalState.open && (
        <ErrorBoundary>
          <div className="modalCenter">
            <ListItemAvatar>
              <Avatar alt={userFullname} src={picture?.large} />
            </ListItemAvatar>
            <ListItemText style={{flex: 'none'}} primary={userFullname} secondary={phone} />
            <Typography variant="button" gutterBottom>
              <div>{gender ?? ''}</div>
              <div>{phone ?? ''}</div>
              <div>{cell ?? ''}</div>
              <div>{email ?? ''}</div>
              <div>{dob?.data ?? ''}</div>
              <div>{location?.city ?? ''}</div>
            </Typography>
            <Button style={{backgroundColor: '#e0e0e0'}} variant="contained" onClick={handleClose}>
              Close
            </Button>
          </div>
        </ErrorBoundary>
      )}
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar onClick={handleOpen} alt={userFullname} src={picture?.large} />
        </ListItemAvatar>
        <ListItemText primary={userFullname} secondary={phone} />
        {isSuggestion && (
          <IconButton onClick={handleAddContact} className="fa fa-plus-circle" color="primary">
            {'+'}
          </IconButton>
        )}
      </ListItem>
    </>
  );
};

export default ContactCard;
