import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

export function ListComponent() {

  return (


      <div>

          <List>
          
              {generate(
          
                  <ListItem
                  
                      secondaryAction={
                        <IconButton edge="end" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      }
                  
                  >

                  <ListItemAvatar>
                  
                    <Avatar>
                  
                      <FolderIcon />
                  
                    </Avatar>
                  
                  </ListItemAvatar>
                  
                  <ListItemText primary="Single-line item" />
                
                  </ListItem>

              )}

          </List>
  
      </div>
  );
}

List.propTypes = {};

List.defaultProps = {};
