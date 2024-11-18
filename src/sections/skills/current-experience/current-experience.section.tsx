import React from "react";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

interface CurrentExperienceProps {
  items: { icon: any; text: string }[];
  isScreenSmall: boolean;
}

export const CurrentExperience: React.FC<CurrentExperienceProps> = ({
  items,
  isScreenSmall,
}) => {
  return (
    <Box maxWidth={isScreenSmall ? "455px" : "100%"}>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText className="subText" primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
