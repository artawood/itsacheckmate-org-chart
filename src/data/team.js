const team = {
  ceo: { title: "CEO/Founder", name: "Vishal Agarwal" },
  departments: {
    administration: {
      dept_name: "Administration / HR",
      manager: { title: "", name: "" },
      team_members: [{ title: "Executive Assistant / HR", name: "Carrie Hart" }]
    },
    brand_marketing: {
      dept_name: "Brand + Marketing",
      manager: { title: "", name: "" },
      team_members: [
        { title: "Head of Design", name: "Pantipa Chitamitara" },
        { title: "Content+Marketing/Conference Logistics", name: "Carrie Hart" }
      ]
    },
    growth: {
      dept_name: "Growth",
      manager: { title: "", name: "" },
      team_members: [
        { title: "VP of Enterprise Sales", name: "Donna Peters" },
        { title: "Director of Partnership", name: "Chad Horn" },
        { title: "Director of Strategic Partnerships", name: "Stefan Hertzberg" },
        { title: "Growth Manager", name: "Chris Giorgou" }
      ]
    },
    technology_engineering: {
      dept_name: "Technology/Engineering",
      manager: { title: "Chief Technology Officer", name: "Luke Ivers" },
      divisions: {
        customer_support: {
          div_name: "Customer Support",
          lead: { title: "Head of Support", name: "Jason Kauffman" },
          sub_divisions: [],
          team_members: [
            { title: "Operations Specialist", name: "JaLessa Wilson" },
            { title: "Operations Specialist", name: "Tracy Malmstead" },
            { title: "Operations Specialist", name: "Asley Bifano" },
            { title: "Operations Specialist", name: "Jared McCune" }
          ]
        },
        engineering: {
          div_name: "Engineering",
          lead: { title: "", name: "" },
          sub_divisions: {
            operations: {
              name: "Ops",
              lead: { title: "Head of Engineering Ops", name: "Eric Wagner" },
              team: [
                {
                  name: "Internal Support",
                  team_members: [
                    { title: "Web Developer", name: "Sam Tran" },
                    { title: "Front End/UI Developer", name: "Art Chitamitara" }
                  ]
                },
                {
                  name: "Tech Support",
                  team_members: [
                    { title: "Tech Support", name: "Nilesh Humne" },
                    { title: "Tech Coordinator", name: "Leona Cox" },
                    { title: "Tech Support", name: "Jeremy Benoist" }
                  ]
                }
              ],
              team_members: []
            },
            devOps: {
              name: "DevOps",
              lead: { title: "Engineer", name: "Ben Cohen" },
              team: [],
              team_members: []
            },
            integrations: {
              name: "Integrations",
              lead: { title: "Head of Integrations", name: "Amit Solanki" },
              team_members: [
                { title: "Engineer", name: "Raymond Dias" },
                { title: "Engineer", name: "Braj Pratap Singh" },
                { title: "Engineer", name: "Shruti Satsangi" }
              ]
            },
            qa: { name: "QA/QA Ops", lead: { title: "QA/QA Ops", name: "Ben Stinnett" }, team: [] }
          }
        },
        pre_go_live: {
          div_name: "Pre Go-LIVE",
          lead: { title: "Account Manager", name: "Brett Jones" },
          sub_divisions: [
            {
              name: "Account Management",
              team_members: [
                { title: "Account Manager", name: "Angie Bliss" },
                { title: "Account Manager", name: "Mandar Phadke" }
              ]
            },
            {
              name: "On-Boarding Administration",
              team_members: [
                { title: "On-Boarding Administrator", name: "Natasha Foiles" },
                { title: "", name: "Aslam Mansuri" }
              ]
            },
            {
              name: "Menu Management",
              lead: { title: "", name: "Mandar" },
              team: [
                { name: "Billing", team_members: [] },
                {
                  name: "Mapping",
                  team_members: [
                    { title: "Mapping Lead", name: "Prasad Nair" },
                    { title: "Mapping Lead", name: "Vivek Joshi" }
                  ]
                }
              ]
            }
          ],
          team_members: [
            { title: "Operations Specialist", name: "JaLessa Wilson" },
            { title: "Operations Specialist", name: "Tracy Malmstead" },
            { title: "Operations Specialist", name: "Asley Bifano" },
            { title: "Operations Specialist", name: "Jared McCune" }
          ]
        }
      }
    },
    special_projects: {
      dept_name: "Special Projects",
      manager: { title: "", name: "" },
      team_members: [
        { title: "Special Projects", name: "Deepti Joshi" },
        { title: "Operations Specialist", name: "Bob Wagner" }
      ]
    },
    international_bd: {
      dept_name: "International BD",
      manager: { title: "Head of International BD", name: "Rob McMillan" },
      team_members: [{ title: "Head of International BD", name: "Rob McMillan" }]
    }
  }
};

export default team;
