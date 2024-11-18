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
    <Box>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemIcon
              sx={{ width: isScreenSmall ? "35px" : "fit-content" }}
            >
              {item.icon}
            </ListItemIcon>
            <ListItemText className="subText" primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
