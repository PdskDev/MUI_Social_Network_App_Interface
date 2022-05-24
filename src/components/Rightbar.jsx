import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position="fixed" width={300}>
        <Typography variant="h6" fontWeight={100}>
          Amis en ligne
        </Typography>
        <AvatarGroup max={6}>
          <Avatar
            alt="Agnes Walker"
            src="https://images.pexels.com/photos/3225901/pexels-photo-3225901.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/12125281/pexels-photo-12125281.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/2952204/pexels-photo-2952204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Travis Howard"
            src="https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/5765617/pexels-photo-5765617.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/2952204/pexels-photo-2952204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/871491/pexels-photo-871491.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Cindy Baker"
            src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
          <Avatar
            alt="Trevor Henderson"
            src="https://images.pexels.com/photos/908934/pexels-photo-908934.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </AvatarGroup>
        <Typography variant="h6" fontWeight={100} mt={2} mb={2}>
          Dernières publications
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1436316/pexels-photo-1436316.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/1599452/pexels-photo-1599452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2952204/pexels-photo-2952204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/10777093/pexels-photo-10777093.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.pexels.com/photos/2144413/pexels-photo-2144413.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62"
              alt=""
            />
          </ImageListItem>
        </ImageList>
        <Typography variant="h6" fontWeight={100} mt={2}>
          Dernières conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://images.pexels.com/photos/3206079/pexels-photo-3206079.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://images.pexels.com/photos/2952204/pexels-photo-2952204.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
