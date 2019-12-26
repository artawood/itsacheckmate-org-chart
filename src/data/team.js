const team = {
  ceo: { title: "CEO/Founder", name: "Vishal Agarwal" },
  departments: {
    brand_marketing: {
      dept_name: "Brand + Marketing",
      lead: { title: "", name: "" },
      team: [
        { title: "Head of Design", name: "Pantipa Chitamitara" },
        { title: "Content+Marketing/Conference Logistics", name: "Carrie Hart" }
      ]
    },
    growth: {
      dept_name: "Growth Team",
      lead: { title: "", name: "" },
      team: [
        { title: "VP of Enterprise Sales", name: "Donna Peters" },
        { title: "Director of Partnership", name: "Chad Horn" },
        { title: "Director of Strategic Partnerships", name: "Stefan Hertzberg" },
        { title: "Growth Manager", name: "Chris Giorgou" }
      ]
    },
    technology_engineering: {
      dept_name: "Technology/Engineering",
      lead: { title: "Chief Technology Officer", name: "Luke Ivers" },
      divisions: [
        {
          div_name: "Customer Support",
          lead: { title: "Head of Support", name: "Jason Kauffman" },
          team: [
            { title: "Operations Specialist", name: "JaLessa Wilson" },
            { title: "Operations Specialist", name: "Tracy Malmstead" },
            { title: "Operations Specialist", name: "Asley Bifano" },
            { title: "Operations Specialist", name: "Jared McCune" }
          ]
        },
        {
          div_name: "Engineering",
          lead: { title: "Account Manager", name: "Brett Jones" },
          team: []
        },
        {
          div_name: "Pre Go-LIVE",
          lead: { title: "Account Manager", name: "Brett Jones" },
          team: [
            { title: "Operations Specialist", name: "JaLessa Wilson" },
            { title: "Operations Specialist", name: "Tracy Malmstead" },
            { title: "Operations Specialist", name: "Asley Bifano" },
            { title: "Operations Specialist", name: "Jared McCune" }
          ]
        }
      ]
    },
    special_projects: {
      dept_name: "Special Projects",
      lead: { title: "", name: "" }
    }
  }
};

export default team;
