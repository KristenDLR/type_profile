import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

interface CurrentExperienceProps {
  items: { icon: any; text: string }[];
}

export const CurrentExperience: React.FC<CurrentExperienceProps> = ({
  items,
}) => {
  return (
    <Box>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
