const skills = [
  {
    id: "Java",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Programming Language",
  },
  {
    id: "SQL",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Query Language",
  },
  {
    id: "Cloud",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Cloud infrastructure",
  },
  {
    id: "Linux",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Operating System",
  },
  {
    id: "AWS",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Cloud platforms",
  },
  {
    id: "Continuous Integration",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Continuous Integration",
  },
  {
    id: "Docker",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Containerization software",
  },
  {
    id: "Git",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Version Control Software",
  },
  {
    id: "Azure",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Cloud Computing",
  },
  {
    id: "Business Intelligence",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Data Management",
  },
  {
    id: "C#",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Multi-paradigm Programming Language",
  },
  {
    id: "DevOps",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Information Technology Management",
  },
  {
    id: "C++",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Programming Language",
  },
  {
    id: "CD",
    group: 1,
    selected: 0,
    connection: 5,
    title: "Software Development Process",
  },
  {
    id: "Python",
    group: 1,
    selected: 0,
    connection: 5,
    title: "General-purpose Programming Language",
  },
];

import { Autocomplete, Box, TextField } from "@material-ui/core";
export default function Skills({ selected, setSelected }) {
  return (
    <Autocomplete
      value={selected}
      onChange={(event: any, newValue: string) => {
        console.log(newValue);
        setSelected(newValue);
      }}
      options={skills}
      disablePortal
      autoHighlight
      id="combo-box-demo"
      sx={{ width: 300 }}
      getOptionLabel={(option) => option.id}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.id}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Choose a skill"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
    ></Autocomplete>
  );
}
